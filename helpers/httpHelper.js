"use strict";

var http = require('http');

function httpGet(host, port, url, cb) {
    var options = {
        host  : host,
        port  : port,
        path  : url,
        method: 'GET'
    };
    var ret = false;
    var req = http.request(options, function (res) {
        var buffer = '';
        res.on('data', function (data) {
            buffer += data;
        });
        res.on('end', function () {
            cb(null, res, buffer);
        });
    });
    req.end();
    req.on('error', function (e) {
        if ( !ret ) {
            cb(e, null, null);
        }
    });
}

var client = {
    host: '',
    port: '',
    get : function (url, cb) {
        httpGet(this.host, this.port, url, cb);
    }
};

var httpHelper = {
    client: client
};

module.exports = httpHelper;