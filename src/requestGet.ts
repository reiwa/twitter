import Axios from 'axios'
import { createEndpoint } from './helpers/createEndpoint'
import { createHeaders } from './helpers/createHeaders'
import { createQueryParams } from './helpers/createQueryParams'
import { Credential } from './types/credential'

export const callGetRequest = <
  Request extends { [key: string]: boolean | string | number | void },
  Response
>(
  credential: Credential,
  path: string
) => async (data: Request) => {
  const method = 'GET'

  const queryParams = createQueryParams(data)

  const url = createEndpoint(path, queryParams)

  const headers = createHeaders({ method, url, ...credential })

  const res = await Axios.get<Response>(url, { headers })

  return res.data
}
