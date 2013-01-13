var xmlrpc = require('xmlrpc');

var parts = ['Common', 'Auth'];

parts.forEach(function (k) {
  exports[k] = require('./services/' + k.toLowerCase())[k];
});

module.exports.createClient = function (options) {
  var client = {};

  var xmlrpcClient = xmlrpc.createClient({
      host: options.host,
      port: options.port || 80,
      path: '/'
    });

  client.xmlrpcClient = xmlrpcClient;
  client.auth = new exports['Auth'](xmlrpcClient, options);

  client.auth.login(function (err, userId) {
    if (err) {
      throw err;
    }
    options.userId = userId;

    parts.forEach(function (k) {
      client[k.toLowerCase()] = new exports[k](xmlrpcClient, options);
    });
  });

  return client;
};
