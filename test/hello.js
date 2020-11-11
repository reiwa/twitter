const a = require('../lib')

a.createToken()
  .then(() => {
    console.log('done')
  })
  .catch(err => {
    console.log(err.response.data)
  })
