const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';


client.once('ready', () => {
    console.log('ModGo2 is online!');

    client.user.setActivity("ModGo2 | In development | ModGo2")
});

client.on ('message', message =>{
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    })






client.login(process.env.token);
