import crypto from 'crypto'
import OAuth from 'oauth-1.0a'

export const createHeaders = <T>({
  data,
  method,
  url,
  apiKey,
  apiSecretKey,
  accessToken,
  accessTokenSecret,
}: {
  data: T
  method: string
  url: string
  apiKey: string
  apiSecretKey: string
  accessToken: string
  accessTokenSecret: string
}) => {
  const oauth = new OAuth({
    consumer: { key: apiKey, secret: apiSecretKey },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) => {
      return crypto
        .createHmac('sha1', key)
        .update(baseString)
        .digest('base64')
    },
    body_hash_function: data => {
      return crypto
        .createHash('sha1')
        .update(data)
        .digest('base64')
    },
  })

  const authorization = oauth.authorize(
    {
      url,
      method,
      data,
      includeBodyHash: true,
    },
    { key: accessToken, secret: accessTokenSecret }
  )

  return oauth.toHeader(authorization)
}
