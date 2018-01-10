const app = require('express')()

app.use('/', (req, res) => {
  res.send({jos : 'run' })
})

app.listen(3000, () => {
  console.log('jalan di tige rebu')
})

module.exports = app
