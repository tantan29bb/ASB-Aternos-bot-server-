var Discord = require ('discord.io');
var logger = require ('winston');
var auth = require ('./ auth.json');
logger.remove (logger.transports.Console);
logger.add (nouveau logger.transports.Console, 
    coloriser: vrai
);
logger.level = 'debug';
var bot = new Discord.Client (
   jeton: auth.token,
   autorun: true
);
bot.on ('ready', fonction (evt) 
    logger.info («Connecté»);
    logger.info ('Connecté en tant que:');
    logger.info (bot.username + '- (' + bot.id + ')');
);
bot.on ('message', fonction (user, userID, channelID, message, evt) 
    if (message.substring (0, 1) == '#') 
        var args = message.substring (1) .split ('');
        var cmd = args[0];
       
        args = args.splice (1);
        commutateur (cmd) 
            cas 'ping':
                bot.sendMessage (
                    à: channelID,
                    message: 'Pong!'
                );
            Pause;

            args = args.splice (1);
            commutateur (cmd) 
                cas 'Quoi':
                    bot.sendMessage (
                        à: channelID,
                        message: 'Feur!'
                    );
                Pause;
         
     
);