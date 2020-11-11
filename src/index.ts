import Axios from 'axios'
import { createRequest } from './helpers/createRequest'
import { Credential } from './types/credential'
import { SearchTweetsRequest, SearchTweetsResponse } from './types/searchTweets'
import {
  StatusesUpdateRequest,
  StatusesUpdateResponse,
} from './types/statusesUpdate'

export const createClient = (credential: Credential) => {
  const request = createRequest(credential)

  return {
    statuses: {
      update: request<StatusesUpdateRequest, StatusesUpdateResponse>(
        'POST',
        '1.1/statuses/update.json'
      ),
    },
    search: {
      tweets: request<SearchTweetsRequest, SearchTweetsResponse>(
        'GET',
        '1.1/search/tweets.json'
      ),
    },
  }
}

export const createToken = async () => {
  const res = await Axios.request<Response>({
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: '',
      password: '',
    },
    url: 'https://api.twitter.com/oauth2/token',
    params: {
      grant_type: 'client_credentials',
    },
  })

  console.log(res.data)
}
