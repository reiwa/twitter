import { createHmac } from 'crypto'

export const createHash = (baseString: string, key: string) => {
  return createHmac('sha1', key)
    .update(baseString)
    .digest('base64')
}
