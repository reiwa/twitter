import axios from 'axios'
import { createEndpoint } from '../helpers/createEndpoint'
import { createHeaders } from '../helpers/createHeaders'
import { createQueryParams } from '../helpers/createQueryParams'
import { Credential } from '../types/credential'
import { Status } from '../types/status'

export const update = (credential: Credential) => async (data: {
  status: string
  in_reply_to_status_id?: string
  auto_populate_reply_metadata?: boolean
  exclude_reply_user_ids?: string
  attachment_url?: string
  media_ids?: string
  possibly_sensitive?: boolean
  lat?: string
  long?: string
  place_id?: string
  display_coordinates?: boolean
  trim_user?: boolean
  enable_dmcommands?: boolean
  fail_dmcommands?: boolean
  card_uri?: string
}) => {
  const method = 'POST'

  const queryParams = createQueryParams(data)

  const url = createEndpoint('1.1/statuses/update.json', queryParams)

  const headers = createHeaders({ method, url, ...credential })

  const res = await axios.post<Status>(url, {}, { headers })

  return res.data
}
