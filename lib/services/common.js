var Common = exports.Common = function (xmlrpcClient, options) {
  this.options = options;
  this.xmlrpcClient = xmlrpcClient;

  var firstParams = [
    this.options.database,
    this.options.userId,
    this.options.password,
    this._modelName
  ];
};

Common.prototype.create = function (modelData, cb) {
  var params = firstParams.concat([
    "create",
    modelData
  ]);

  this.xmlrpcClient.methodCall('execute', params, cb);
};

Common.prototype.list = function (cb) {
  var params = firstParams.concat([
    "browse"
  ]);

  this.xmlrpcClient.methodCall('execute', params, cb);
};

Common.prototype.get = function (ids, fields, cb) {
  var params = firstParams.concat([
    "read",
    ids,
    fields
  ]);

  this.xmlrpcClient.methodCall('execute', params, cb);
};

Common.prototype.remove = function (ids, cb) {
  var params = firstParams.concat([
    "unlink",
    ids
  ]);

  this.xmlrpcClient.methodCall('execute', params, cb);
};

Common.prototype.update = function (cb) {
  var params = firstParams.concat([
    "update",
    modelData.id,
    modelData
  ]);

  this.xmlrpcClient.methodCall('execute', params, cb);
};

Common.prototype.find = function (query, cb) {
  var params = firstParams.concat([
    "unlink",
    query
  ]);

  this.xmlrpcClient.methodCall('execute', params, cb);
};
