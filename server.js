var connect = require('connect'),
	serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic(__dirname));
app.listen(2000);
console.log('localhost:2000');
