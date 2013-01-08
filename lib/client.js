var xmlrpc = require('xmlrpc');

// var parts = ['Users', 'Products', 'Partners', 'Auth'];
var parts = ['Auth'];

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

  parts.forEach(function (k) {
    client[k.toLowerCase()] = new exports[k](xmlrpcClient, options);
  });

  return client;
};
