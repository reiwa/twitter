import { Status } from './status'

export type StatusesUpdateRequest = {
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
}

export type StatusesUpdateResponse = Status
