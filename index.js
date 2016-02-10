var http = require('http');
var irc = require('irc');

var config = {
    realName: 'Sakala Venkata Krishna Rohit',
    port: 6667,
    localAddress: null,
    debug: false,
    showErrors: false,
    autoRejoin: false,
    autoConnect: true,
    channels: [],
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: false,
    floodProtectionDelay: 1000,
    sasl: true,
    password: radhaadolf,
    stripColors: false,
    channelPrefixes: "&#",
    messageSplit: 512,
    encoding: ''
}

var client = new irc.Client('irc.freenode.net', 'rohitsakala', {
		  autoConnect: false
		  });

client.connect(5, function(input) {
	console.log("Connected!");
	client.join('#opendaylight', function(input) {
		console.log("Joined #opendaylight");
	});
});

// Listener to be notified when a person joins the channel

client.addListener('message', function (channel, nick, message) {
	if(nick == "Nithiya")
	{
		console.log(channel + '=>' + nick + "has joined IRC");
	}
});

// Listener to get messages in the channel

client.addListener('message', function (from, to, text) {
		  console.log(from + ' => ' + to + ': ' + text);
});

// Listener to get messages in the channel only of PM

client.addListener('pm', function (from, text) {
	console.log("[PM] - " + from + ': ' + text);
	client.say(from, "Leave your message, I will reply when I see the notification to my mobile.");
});


