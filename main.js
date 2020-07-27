const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ';';


client.once('ready', () => {
    console.log('ModGo2 is online!');

    client.user.setActivity("ModGo2 | In development | ModGo2")
});



client.login(process.env.token);
