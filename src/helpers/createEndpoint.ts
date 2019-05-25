export const createEndpoint = (path: string, params: string) => {
  return `https://api.twitter.com/${path}?${params}`
}
