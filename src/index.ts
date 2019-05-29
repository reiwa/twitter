import { search } from './search'
import { statuses } from './statuses'
import { Credential } from './types/credential'

export const createClient = (credential: Credential) => {
  return {
    statuses: statuses(credential),
    search: search(credential)
  }
}
