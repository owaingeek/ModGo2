const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';


client.once('ready', () => {
    console.log('ModGo2 is online!');

    client.user.setActivity("ModGo2 | In development | ModGo2")
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
