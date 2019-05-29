import { createIterableParams } from './createIterableParams'

export const createQueryParams = (data: {
  [key: string]: boolean | string | number | void
}) => {
  const _data = createIterableParams(data)
  return new URLSearchParams(_data).toString()
}
