var http = require('http');
var irc = require('irc');
var util = require('util');

var port = process.env.PORT || 5000;
var server = http.createServer();
server.listen(port);

var config = {
    userName: 'rohitsakala',
    realName: 'Sakala Venkata Krishna Rohit',
    port: 6667,
    localAddress: null,
    debug: true,
    showErrors: true,
    autoRejoin: false,
    autoConnect: false,
    channels: [],
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: false,
    floodProtectionDelay: 1000,
    sasl: true,
    password: 'radhaadolf',
    stripColors: false,
    channelPrefixes: "&#",
    messageSplit: 512,
    encoding: ''
}

var client = new irc.Client('irc.freenode.net', 'rohitsakala', config);

client.connect(5, function(data) {
    console.log("Connected  to " + data['server'] );
    
    client.join('#opendaylight',function(err,data) {
        if(err)
        {
            console.error("An error occured",err);
        }
        else
        {
            console.log(util.inspect(data,false,null));
        }
    });

    client.join('#osdg-iiith',function(err,data) {
        if(err)
        {
            console.error("An error occured",err);
        }
        else
        {
            console.log(util.inspect(data,false,null));
        }
    });

});

client.addListener('pm', function (nick, text, message) {
    client.say(nick,"Bot :- Logged and sent to Rohit's Personal Mobile.");
});

