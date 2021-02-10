const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';

client.once('ready', () => {
    console.log('ModGo2 is online!');
    
 
    client.user.setActivity("ModGo2 // Use ;help to open the help menu // ModGo2")
    
    

});









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
        message.channel.send('```----------------------------------------------------------------------```');
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
    if (msg.content === ';devmode') {
      client.user.setActivity("ModGo2 // Use ;help to get help // In development mode. Expect reboots // ModGo2");
      
    }
  });
  client.on('message', msg => {
    if (msg.content === ';listernerboost') {
     client.getMaxListeners(100);
      
    }
  })

  client.login(process.env.token);


