import OAuth from 'oauth-1.0a'
import { createHash } from './createHash'

export const createHeaders = ({
  method,
  url,
  apiKey,
  apiSecretKey,
  accessToken,
  accessTokenSecret
}: {
  method: string
  url: string
  apiKey: string
  apiSecretKey: string
  accessToken: string
  accessTokenSecret: string
}) => {
  const oauth = new OAuth({
    consumer: { key: apiKey, secret: apiSecretKey },
    // eslint-disable-next-line @typescript-eslint/camelcase
    signature_method: 'HMAC-SHA1',
    // eslint-disable-next-line @typescript-eslint/camelcase
    hash_function: createHash
  })

  const token: OAuth.Token = { key: accessToken, secret: accessTokenSecret }

  const request: OAuth.RequestOptions = { url, method }

  const authorization = oauth.authorize(request, token)

  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    ...oauth.toHeader(authorization)
  }
}
