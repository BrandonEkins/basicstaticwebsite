var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/public')).listen(3000, function() {
	console.log('server running on port 3000');
})
