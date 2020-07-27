const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';


client.once('ready', () => {
    console.log('ModGo2 is online!');
});

client.on ('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.legnth).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send('Pong!');
    }
});






client.login(process.env.token);
