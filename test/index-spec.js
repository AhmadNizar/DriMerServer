var chai = require('chai')
var chaitHttp = require('chai-http')
var server = require('../app')
var should = chai.should()

chai.use(chaitHttp)

describe('App', function () {
  it('send back object', function(done){
    chai.request(server)
    .get('/')
    .end((err,res) => {
      res.body.should.be.an('object')
      done()
      server.close()
    })
  })
})
