import { Credential } from '../types/credential'
import { update } from './update'

export const statuses = (credential: Credential) => {
  return {
    update: update(credential)
  }
}
