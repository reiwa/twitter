import Axios from 'axios'
import querystring from 'querystring'
import { Credential } from '../types/credential'
import { createEndpoint } from './createEndpoint'
import { createHeaders } from './createHeaders'

export const createRequest = (credential: Credential) => <
  Request extends { [key: string]: boolean | string | number },
  Response
>(
  method: 'DELETE' | 'GET' | 'POST',
  path: string
) => {
  return async (data: Request) => {
    const queryParams = querystring.stringify(data)

    const url = createEndpoint(path, queryParams)

    const headers = createHeaders({ method, url, data: {}, ...credential })

    const res = await Axios.request<Response>({
      method,
      headers,
      url,
      validateStatus: () => true,
    })

    return res.data
  }
}
