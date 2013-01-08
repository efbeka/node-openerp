var openerp = require('openerp');

var client = openerp.createClient({
  username: 'efbeka',
  password: 'foo',
  database: 'bar',
  host: 'https://openerp.foobar.com',
  port: '8069'
});

client.products.list(function (err, result) {
  if (err) {
    throw err;
  }

  // use the list of products
  console.dir(result);
});
