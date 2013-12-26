var hermes = require('../index.js');
var server = new hermes.Hermes();
var sys = require('sys');
var net = require('net');
 
sys.puts("Required index");

server.listen(2815, '127.0.0.1');
sys.puts('connecting to myself');
var client = net.connect({port: 2815, host: '127.0.0.1'}, function (sock) {
	client.write('GET hm://factors/love/joy');
});
client.on('data', function (data) {
	console.log(data.toString());
});