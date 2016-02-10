var irc = require("irc");

var config = { 
	channels: ["#opendaylight", "#mootools"],
	server: "irc.freenode.net",
	botName: "rohitsakalabot"
};

var bot = new irc.Client(config.server, config.botName, {
                        channels: config.channels
});

bot.addListener("message#", function(nick, to, text, message) {
		console.log(nick, " :=> ", text);
});
