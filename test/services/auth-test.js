var vows = require('vows'),
    assert = require('assert'),
    xmlrpc = require('xmlrpc');

var createClient = require('../../lib/client').createClient,
    options = require('../config'),
    fixtures = require('../fixtures/auth').login;

vows.describe('services/auth').addBatch({
  'Authentification': {
    'on an server set up': {
      topic: function () {
        var server = xmlrpc.createServer({
              'host': options.host,
              'port': options.port
            }, this.callback);

        server.on('login', function (err, params, callback) {
          callback(null, fixtures.userId);
        });
      },
      'with correct credentials': {
        topic: function () {
          var client = createClient(options);
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
  }
}).export(module);
