import { request } from './request'
import { Credential } from './types/credential'
import { SearchTweetsRequest, SearchTweetsResponse } from './types/searchTweets'
import {
  StatusesUpdateRequest,
  StatusesUpdateResponse
} from './types/statusesUpdate'

export const createClient = (credential: Credential) => {
  return {
    statuses: {
      update: request<StatusesUpdateRequest, StatusesUpdateResponse>(
        credential,
        'POST',
        '1.1/statuses/update.json'
      )
    },
    search: {
      tweets: request<SearchTweetsRequest, SearchTweetsResponse>(
        credential,
        'GET',
        '1.1/search/tweets.json'
      )
    }
  }
}
