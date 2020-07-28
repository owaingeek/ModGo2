const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';


const activities_list = [
  "ModGo2",
  "with the ;help command.", 
  "with the developers console",
  "with some code", 
  "with JavaScript",
  "with developement"
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
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
        message.channel.send('```;help               This screen here```');
        message.channel.send('```;botversion         The bot version of this bot here```');
        message.channel.send('```;users              Displays the ammount of peeps in the server```');
        message.channel.send('```;favoratepeeps      The bot devs fav peeps```');
        message.channel.send('```;botdevs            The current bot devs.```')
        message.channel.send('```;kick {user}        Kicks the user tagged.```')
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
      msg.reply('The owners are 𝐸𝓋𝒶, 𝒯𝒽𝑒 𝒜𝓃𝒾𝓂𝑒 𝒻𝑜𝓍, Liam and OwainTehDevil');
      msg.channel.send('Hey!! Please dont hate I am only a bot and I am still being deved. :sob:');
    }
  });

  client.login(process.env.token);


