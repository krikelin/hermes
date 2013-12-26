/**
 * Module Hermes
 * @module
 **/
var net = require('net');
var sys = require('sys');

var Address = function (addr) {
	var regex = /^([A-Z]+) (hm:\/\/)((.*)(\/?))+/i;
	if (addr.match(regex)) {
		sys.puts('Parsing address');
  		var segments = addr.split(regex);
  		console.log(segments)
		this.method =segments[1];
		this.parts = segments[3].split('/');
		this.uri = 'hm://' + this.parts.join('/');
		this.service = this.parts[0];
		sys.puts('Service: ' + this.service);
		sys.puts(this.uri);

		
  	} else {
  		throw "Invalid address";
  	}
}

exports.Address = Address;

/**
 * @class
 * @constructor
 **/
var Server = function () {
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
	  	var addr = new Address(data.toString());

	  	switch (addr.service) {
	  		
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

exports.Server = Server;

/**
 * @function
 * @param {Integer} port The port
 * @param {String} addr The address
 **/
Server.prototype.listen = function (port, addr) {
	this.server.listen(port, addr);
};

/**
 * @class
 * @constructor
 **/
var Service = function (id) {
	
}

/**
 * @constructor
 * @method
 **/
Service.prototype.request = function (req, callback) {

};

exports.Service = Service;
