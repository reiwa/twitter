import axios from 'axios'
import { URLSearchParams } from 'url'
import { createEndpoint } from '../helpers/createEndpoint'
import { createHeaders } from '../helpers/createHeaders'
import { Credential } from '../types/credential'
import { Status } from '../types/status'

type Data = { status: string }

export const update = (credential: Credential) => {
  return async ({ status }: Data) => {
    const method = 'POST'

    const params = new URLSearchParams({ status }).toString()

    const url = createEndpoint('1.1/statuses/update.json', params)

    const headers = createHeaders({ method, url, ...credential })

    const res = await axios.post<Status>(url, {}, { headers })

    return res.data
  }
}
