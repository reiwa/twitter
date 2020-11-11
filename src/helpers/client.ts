import Axios from 'axios'
import { createOauth } from './createOauth'

type Credentials = {
  consumerKey: string
  consumerSecret: string
  accessToken?: string
  accessTokenSecret?: string
}

export const client = ({ consumerKey, consumerSecret }: Credentials) => {
  const oauth = createOauth(consumerKey, consumerSecret)

  return Axios.create({
    headers: {},
  })
}
