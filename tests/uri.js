var sys = require('sys');
var hermes = require('../index.js');
var uri = new hermes.Uri('tesla:aqtivity:12412512512351252:A:w');
sys.puts(uri.toHermesUri());

