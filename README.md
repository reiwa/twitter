# @reiwa/twitter

## Installation

```
$ yarn add @reiwa/twitter
```

## Usage

### ES Modules (TypeScript)

```ts
import { createClient } from '@reiwa/twitter'

const client = createClient({
  apiKey: process.env.API_KEY,
  apiSecretKey: process.env.API_SECRET_KEY,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
})

client.search.tweets({ q: 'hello' }).then(({ statuses }) => {
  console.log(statuses)
})
```
