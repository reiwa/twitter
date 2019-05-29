export const createEndpoint = (path: string, queryParams: string) => {
  return `https://api.twitter.com/${path}?${queryParams}`
}
