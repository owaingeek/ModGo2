const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';

const ytdl = require('ytdl-core')

client.once('ready', () => {
    console.log('ModGo2 is online!');
    

    client.user.setActivity("with ModGo2 | In development | Do ;help for help | ModGo2")
    

});

client.once('ready', () => {
 console.log('Ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});

client.once


client.on('message', message => {
	if (message.content === ';botdevs') {
		message.channel.send('The current bot dev(s) are OwainTehDevil');
  }
});

client.on('message', message => {
	if (message.content === ';ping') {
		message.channel.send('Pong.');
	}
});

client.on('message', msg => {
    if (msg.content === 'welcome me!') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });
client.on('message', msg => {
    if (msg.content === 'welcome me.') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'welcome me') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Welcome Me.') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Welcome Me!') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Welcome Me') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Welcome me!') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Welcome me.') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Welcome me') {
      msg.reply('Welcome man!!');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'hi.') {
      msg.reply('Hi! How are you today??');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Hi.') {
      msg.reply('Hi! How are you today??');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'hi') {
      msg.reply('Hi! How are you today??');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Hi!') {
      msg.reply('Hi! How are you today??');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });


client.on('message', msg => {
    if (msg.content === 'Hi') {
      msg.reply('Hi! How are you today??');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });

client.on('message', message => {
	if (message.content === ';help') {

        message.channel.send('Command Help:')
        message.channel.send('```;help               This screen here```');
        message.channel.send('```;botversion         The bot version of this bot here```');
        message.channel.send('```;users              Displays the ammount of peeps in the server```');
        message.channel.send('```;favoratepeeps      The bot devs fav peeps```');
        message.channel.send('```;botdevs            The current bot devs.```');
        
	}
});

client.on('message', message => {
	if (message.content === ';botversion') {
		message.channel.send('We dont have a version for this bot yet. Sorry.');
	}
});

client.on('message', message => {
	if (message.content === ';users') {
		message.channel.send('There is no specified ammount of people in this server and/or the bot dev was to lazy to add this in. :joy:');
	}
});

client.on('message', message => {
	if (message.content === ';favoratepeeps') {
		message.channel.send('My fav peeps are OwainTehDevil');
	}
});

client.on('message', msg => {
    if (msg.content === 'IP') {
      msg.reply('The IP is NetheriteCraft.serv.gs.');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'Ip') {
      msg.reply('The IP is NetheriteCraft.serv.gs.');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'ip') {
      msg.reply('The IP is NetheriteCraft.serv.gs.');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });





client.on('message', msg => {
    if (msg.content === 'owners') {
      msg.reply('The owners are Liam and OwainTehDevil');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });

  client.login(process.env.token);


