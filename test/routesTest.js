'use strict';

require('should');
require('../server.js');

var httpHelper = require('../helpers/httpHelper.js');

httpHelper.client.host = 'localhost';
httpHelper.client.port = '3000';

describe('When testing routes', function () {

    it('GET / should return 200', function (done) {
        httpHelper.client.get('/', function (err, res, body) {
            if ( err ) err.should.equal(null);
            res.statusCode.should.equal(200);
            done();
        });
    });

    it('GET /hello should return 200 and contain "Hello World"', function (done) {
        httpHelper.client.get('/hello', function (err, res, body) {
            if ( err ) err.should.equal(null);
            res.statusCode.should.equal(200);
            body.should.include('Hello World');
            done();
        });
    });
});