import { createClient } from '../lib'

// yarn jest test/search.test.ts
test('search/tweets', async () => {
  if (!process.env.API_KEY) {
    throw new Error('API_KEY not found')
  }

  if (!process.env.API_SECRET_KEY) {
    throw new Error('API_SECRET_KEY not found')
  }

  if (!process.env.ACCESS_TOKEN) {
    throw new Error('ACCESS_TOKEN not found')
  }

  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('ACCESS_TOKEN_SECRET not found')
  }

  const client = createClient({
    apiKey: process.env.API_KEY,
    apiSecretKey: process.env.API_SECRET_KEY,
    accessToken: process.env.ACCESS_TOKEN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  })

  const { statuses } = await client.search.tweets({ q: '#qookie' })

  expect(Array.isArray(statuses)).toBeTruthy()
})
