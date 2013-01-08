# Node-OpenERP

The Node.js OpenERP library enables accessing any OpenERP server's [XML-RPC API](http://doc.openerp.com/trunk/developers/server/02_architecture/#network-communications-and-wsgi).

[![Build Status](https://travis-ci.org/efbeka/node-openerp.png)](https://travis-ci.org/efbeka/node-openerp)

## Install:

This library may be installed using npm:

    npm install openerp

## Usage:


### api.createClient(options)

This method sets up a client for connecting to openerp-server's databases.
Here's a minimal example for connecting :

```js
var openerp = require('openerp');

var client = openerp.createClient({
  username: 'efbeka',
  password: 'foo',
  database: 'bar',
  host: 'https://openerp.foobar.com',
  port: '8069'
});
```

The options object contains three required properties:

* `username`: The username
* `password`: The password
* `database`: The database name
* `host` & `port`: The uri of the Openerp-server host.


### client

Method calls are structured as `resource` and `action`.

``` js
client.resource.action("data", function (err, result) {
  if (err) {
    throw err;
  }

  // use the result

});
```

The client's methods are reflective of [OpenERP's](https://openerp.com) RPC availaible calls.

The full list will be implemented and available here progressively.

## Tests

All tests are written with [vows](http://vowsjs.org) and should be run with [npm](http://npmjs.org):

``` bash
  $ npm test
```

## License

Copyright (C) 2012 Berger Kennedy Fotso

Distributed under the MIT License, see the LICENCE file.
