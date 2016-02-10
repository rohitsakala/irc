var config = {
	channels: ["#opendaylight", "#mootools"],
	server: "irc.freenode.net",
	botName: "rohitsakalabot"
};

var irc = require("irc");
var bot = new irc.Client(config.server, config.botName, {
			channels: config.channels
});
bot.addListener("pm", function(channel, who) {
	bot.say(channel, who + "...dude...welcome back!");
});

