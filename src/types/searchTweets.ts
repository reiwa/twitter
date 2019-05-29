import { SearchMetadata } from './searchMetadata'
import { Status } from './status'

export type SearchTweetsRequest = {
  q: string
  geocode?: string
}

export type SearchTweetsResponse = {
  statuses: Status[]
  searchMetadata: SearchMetadata
}
