import { createClient } from '../lib'

test('statuses/update', async () => {
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

  const status = await client.statuses.update({
    status: Date.now().toString()
  })

  expect(typeof status.id_str).toBe('string')
})
