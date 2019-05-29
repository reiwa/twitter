import { callGetRequest } from './requestGet'
import { Credential } from './types/credential'
import { SearchMetadata } from './types/searchMetadata'
import { Status } from './types/status'

export const search = (credential: Credential) => {
  return {
    tweets: callGetRequest<
      {
        q: string
        geocode?: string
      },
      {
        statuses: Status[]
        searchMetadata: SearchMetadata
      }
    >(credential, '1.1/search/tweets.json')
  }
}
