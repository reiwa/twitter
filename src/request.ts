import Axios from 'axios'
import { createEndpoint } from './helpers/createEndpoint'
import { createHeaders } from './helpers/createHeaders'
import { createQueryParams } from './helpers/createQueryParams'
import { Credential } from './types/credential'

export const request = <
  Request extends { [key: string]: boolean | string | number | void },
  Response
>(
  credential: Credential,
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
