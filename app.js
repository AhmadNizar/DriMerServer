const app = require('express')()

app.use('/', (req, res) => {
  res.send({jos : 'run' })
})

app.use('/test', (req, res) => {
  res.send({Nijar : 'tamvan'})
})

app.listen((process.env.PORT || '3000'), () => {
	console.log('jalan port 3000 tong');
})

module.exports = app
