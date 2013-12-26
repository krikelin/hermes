var hermes = require('../index.js');
var server = new hermes.Server('rep');
var sys = require('sys');
var zmq = require('zmq');


 
sys.puts("Required index");

server.listen(2815, '*');
sys.puts('connecting to myself');
var client = zmq.socket('req');

client.connect('tcp://127.0.0.1:2815');
  // if(err) throw err;
  sys.puts('a');
  
  try {
  	client.send('GET hm://relations/love/joy');
  } catch (e) {
    sys.puts(e);
  }
  sys.puts('a');

client.on('message', function (data) {
	  sys.puts(data.toString());
  });

