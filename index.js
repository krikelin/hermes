/**
 * Module Hermes
 * @module
 **/
var net = require('net');
var sys = require('sys');

/**
 * @class
 * @constructor
 **/
var Hermes = function () {
	var net = require('net');
	this.sockets = [];
	var self = this;
	this.server = net.createServer(function (sock) {
	  sock.write('Echo server\r\n');
	  //socket.pipe(socket);
	  self.sockets.push(sock);
	  sock.on('data', function (data) {

	  	var uri = data.toString().split('\n')[0];
	  	sys.puts(uri);
	  	var regex = /^([a-zA-Z]+) hm:\/\/ (([a-zA-Z0-9]+)\:)+\n/i;
	  	console.log(regex);
	  	if (uri.match(/^hm:\/\/([a-zA-Z]+) (([a-zA-Z0-9]+)\:)+\n/i)) {
	  		var parts = uri.split(regex);
	  		sys.puts(parts);
	  	}
	  });
	  sock.on('end', function() { // client disconnects
        sys.puts('Disconnected: ' + data + data.remoteAddress + ':' + data.remotePort + '\n');
        var idx = sockets.indexOf(sock);
        if (idx != -1) {
            delete sockets[idx];
        }
    });
	});
};

exports.Hermes = Hermes;

/**
 * @function
 * @param {Integer} port The port
 * @param {String} addr The address
 **/
Hermes.prototype.listen = function (port, addr) {
	this.server.listen(port, addr);
};



