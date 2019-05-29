export const createIterableParams = (object: {
  [key: string]: boolean | string | number | void
}) => {
  const keys = Object.keys(object)
  return keys
    .map<[string, boolean | string | number | void]>(key => {
      return [key, object[key]]
    })
    .filter(
      <T>(t: [string, T | void]): t is [string, T] => {
        const [, value] = t
        return typeof value !== 'undefined'
      }
    )
    .map<[string, string]>(([key, value]) => {
      return [key, String(value)]
    })
}
