var vows = require('vows'),
    assert = require('assert'),
    xmlrpc = require('xmlrpc');

var auth = require('../../lib/services/auth'),
    createClient = require('../../lib/client').createClient,
    options = require('../config'),
    client = createClient(options),
    server = xmlrpc.createServer({ 'host': options.host, 'port': options.port }),
    fixtures = require('../fixtures/auth').login;


server.on('login', function (err, params, callback) {
  callback(null, fixtures.userId);
});

var client = createClient(options);

vows.describe('auth').addBatch({
  'Authentification': {
    'with correct credentials': {
      topic: function () {
        return client.auth;
      },
      'contain no error': function (auth) {
        auth.login(function (err, userId) {
          assert.isNull(err);
        });
      },
      'return a correct userid': function (auth) {
        auth.login(function (err, userId) {
          assert.deepEqual(userId, fixtures.userId);
        });
      }
    }
  }
}).export(module);
