const config = require('./config');

const DJS = require('discord.js')
const client = new DJS.Client({
    intents: [
        'GUILDS' ,
        'GUILD_MESSAGES' ,
        'GUILD_MEMBERS' ,
        'GUILD_BANS' ,
    ]
})

const ReliableCmds = require('reliablecmds')

client.on('ready' , () => {
    console.log('Ready!')

    new ReliableCmds(client)
})

client.login(config.TOKEN)