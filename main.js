const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';


client.once('ready', () => {
    console.log('ModGo2 is online!');

    client.user.setActivity("ModGo2 | In development | ModGo2")
});

client.on('message', msg => {
    if (msg.content === 'owners') {
      msg.reply('The owners are Liam and OwainTehDevil');
      msg.channel.send('pong');
    }
  });

client.login(process.env.token);
