import Axios from 'axios'
import { Credential } from '../types/credential'
import { createEndpoint } from './createEndpoint'
import { createHeaders } from './createHeaders'
import { createQueryParams } from './createQueryParams'

export const createRequest = (credential: Credential) => <
  Request extends { [key: string]: boolean | string | number | void },
  Response
>(
  method: 'DELETE' | 'GET' | 'POST',
  path: string
) => {
  return async (data: Request) => {
    const queryParams = createQueryParams(data)

    const url = createEndpoint(path, queryParams)

    const headers = createHeaders({ method, url, ...credential })

    const res = await Axios.request<Response>({
      method,
      headers,
      url
    })

    return res.data
  }
}
