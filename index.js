var zmq = require('zmq');
/**
 * Module Hermes
 * @module
 **/
var net = require('net');
var sys = require('sys');

/**
 * @class
 * @contructor
 **/
var Uri = function (uri) {
  this.cond = /^tesla:([a-z]+):([a-zA-Z0-9]+):([a-zA-Z0-9]+):/i;
  if (!uri.match(this.cond)) throw "Invalid uri";
  this.uri = uri;
  var parts = uri.split(this.cond);
  sys.puts(uri);
}

/**
 * To hermes link
 * @class Uri
 * @function
 * @param {String} service Service to call on
 * @returns {String} The hm:// uri
 **/
Uri.prototype.toHermesUri = function (service) {
 
   var d = this.uri.replace(':/', '/').split(this.cond);
    sys.puts(d);
   return 'hm://' + (typeof(service) !== 'undefined' ? (service + '/') : '') + d.slice(1).join('/');
};

exports.Uri = Uri;

var Address = function (addr) {
	var regex = /^([A-Z]+) (hm:\/\/)((.*)(\/?))+/i;
	if (addr.match(regex)) {
		sys.puts('Parsing address');
  		var segments = addr.split(regex);
  		console.log(segments)
		this.method =segments[1];
		this.parts = segments[3].split('/');
		this.uri = 'hm://' + this.parts.join('/');
    this.parts = this.parts.slice(1);
		this.service = this.parts[0];
		sys.puts('Service: ' + this.service);
		sys.puts(this.uri);
    sys.puts(this.parts);
		
  	} else {
  		throw "Invalid address";
  	}
}

exports.Address = Address;

/**
 * @class
 * @constructor
 **/
var Server = function (type) {
	this.sockets = [];
	var self = this;
	this.server = zmq.socket(type);
  
};

exports.Server = Server;

/**
 * @function
 * @param {Integer} port The port
 * @param {String} addr The address
 **/
Server.prototype.listen = function (port, addr) {
  var self = this;	
  this.server.bind('tcp://' + addr + ':' + port + '', function (err) {
    // sys.puts(err);

	  
	});
  this.server.on('message', function (data) {
    sys.puts("T");
  	var uri = data.toString().split('\n')[0];
  	sys.puts(uri);
  	var addr = new Address(data.toString());

  	switch (addr.service) {
  	case "relations":
      // Call relations backend
     /* var neo4j = require('neo4j');
      var db = new neo4j.GraphDatabase('http://localhost:7474');
      db.query('MATCH (p {node: "' + addr.parts[1] + '"})-->(m) RETURN p', function (err, results) {
        if (err) throw err;
        self.server.send(JSON.stringify(results));
      });*/
      break;
    case "aqtivity":
      // Call the backend service
      
  	}
  });
};

/**
 * @class
 * @constructor
 **/
var Service = function () {
	
}

/**
 * @constructor
 * @method
 **/
Service.prototype.request = function (req, callback) {
  
};

exports.Service = Service;


/***
 * @class
 * @constructor
 **/
var RelationService = function () {
  this.neo4j = neo4
};

/**
 * @class
 * @method
 **/
RelationService.prototype.request = function (req) {
  
};

