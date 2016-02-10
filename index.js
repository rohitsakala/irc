var irc = require("irc");

var config = { 
	channels: ["#opendaylight", "#mootools"],
	server: "irc.freenode.net",
	botName: "rohitsakalabot"
};

var http = require('http');
http.createServer(function (req, res) {

		var bot = new irc.Client(config.server, config.botName, {
			                        channels: config.channels
			});

		  bot.addListener("message#", function(nick, to, text, message) {
			      console.log(nick, " :=> ", text);
			          res.writeHead(200, {'Content-Type': 'text/plain'});
				      res.write(text);
				          res.end(text);
					  });
		  }).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
