import crypto from 'crypto'
import OAuth from 'oauth-1.0a'

export const createOauth = (key: string, secret: string) => {
  return new OAuth({
    consumer: { key, secret },
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
}
