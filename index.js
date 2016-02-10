var http = require('http');
var irc = require('irc');

var client = new irc.Client('irc.freenode.net', 'rohitsakalabot', {
		  autoConnect: false
		  });
client.connect(5, function(input) {
	console.log("Connected!");
	client.join('#opendaylight', function(input) {
		console.log("Joined #clojure");
		client.say('#opendaylight', "Hi");
	});
});

client.addListener('pm', function (from, text) {
	console.log("[PM] - " + from + ': ' + text);
	client.say(from, text);
	if(text.indexOf('die') !== -1) {
			client.disconnect("Goodbye, cruel world!", function() {
			console.log("YOLO");
		});
	}
});

client.addListener('message', function (from, to, text) {
		  console.log(from + ' => ' + to + ': ' + text);
});
