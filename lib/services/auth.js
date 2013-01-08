var Auth = exports.Auth  = function (client, options) {
  this.options = options;
  this.client = client;
};

Auth.prototype.login = function (cb) {
  this.client.methodCall('login', [
    this.options.database,
    this.options.user,
    this.options.password
  ], cb);
};
