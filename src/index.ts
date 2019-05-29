import { createRequest } from './helpers/createRequest'
import { Credential } from './types/credential'
import { SearchTweetsRequest, SearchTweetsResponse } from './types/searchTweets'
import {
  StatusesUpdateRequest,
  StatusesUpdateResponse
} from './types/statusesUpdate'

export const createClient = (credential: Credential) => {
  const request = createRequest(credential)

  return {
    statuses: {
      update: request<StatusesUpdateRequest, StatusesUpdateResponse>(
        'POST',
        '1.1/statuses/update.json'
      )
    },
    search: {
      tweets: request<SearchTweetsRequest, SearchTweetsResponse>(
        'GET',
        '1.1/search/tweets.json'
      )
    }
  }
}
