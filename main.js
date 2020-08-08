const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';

const ytdl = require('ytdl-core')

client.once('ready', () => {
    console.log('ModGo2 is online!');
    

    client.user.setActivity("with ModGo2 | In development | Do ;help for help | ModGo2")
    

});

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const serverQueue = queue.get(message.guild.id);

if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
} else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
} else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
} else {
    message.channel.send("You need to enter a valid command!");
}
});
const queue = new Map();
async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }
} const songInfo = await ytdl.getInfo(args[1]);
const song = {
 title: songInfo.title,
 url: songInfo.video_url,
};
if (!serverQueue) {

}else {
 serverQueue.songs.push(song);
 console.log(serverQueue.songs);
 return message.channel.send(`${song.title} has been added to the queue!`);
}// Creating the contract for our queue
const queueContruct = {
  textChannel: message.channel,
  voiceChannel: voiceChannel,
  connection: null,
  songs: [],
  volume: 5,
  playing: true,
 };
 // Setting the queue using our contract
 queue.set(message.guild.id, queueContruct);
 // Pushing the song to our songs array
 queueContruct.songs.push(song);
 
 try {
  // Here we try to join the voicechat and save our connection into our object.
  var connection = await voiceChannel.join();
  queueContruct.connection = connection;
  // Calling the play function to start a song
  play(message.guild, queueContruct.songs[0]);
 } catch (err) {
  // Printing the error message if the bot fails to join the voicechat
  console.log(err);
  queue.delete(message.guild.id);
  return message.channel.send(err);
 }function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
}const dispatcher = serverQueue.connection
.play(ytdl(song.url))
.on("finish", () => {
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
})
.on("error", error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(`Start playing: **${song.title}**`);
function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}
 

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


