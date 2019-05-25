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
    signature_method: 'HMAC-SHA1',
    hash_function: createHash
  })

  const token: OAuth.Token = { key: accessToken, secret: accessTokenSecret }

  const request: OAuth.RequestOptions = { url, method }

  const authorization = oauth.authorize(request, token)

  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...oauth.toHeader(authorization)
  }
}
