var config = {
	channels: ["#opendaylight", "#mootools"],
	server: "irc.freenode.net",
	botName: "rohitsakalabot"
};

var irc = require("irc");
var bot = new irc.Client(config.server, config.botName, {
			channels: config.channels
});

// Listen for any message, PM said user when he posts
bot.addListener("message", function(from, to, text, message) {
			console.log(message);
			});

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
			console.log(message);
			});




