let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let expect = chai.expect;
let should = chai.should();

let server = require('../server.js');

describe('Test that tests run', function(done) {
  it('should run a test', function(done) {
    expect(true).to.eql(true);
    done();
  });
});

describe('Test server working', function(done) {
    it('should get a server message', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res){
                expect(res.status).to.eql(200);
                done();
            });
    });
});