var chai = require('chai')
var chaitHttp = require('chai-http')
var server = require('../app')
var should = chai.should()
var expect = chai.expect
var assert = require('assert')

chai.use(chaitHttp)

describe('get run', function () {
  it('/', function(done){
    chai.request(server)
    .get('/')
    .end(function(err,res){
      res.body.should.be.an('object')
      done()
    })
  })
})
