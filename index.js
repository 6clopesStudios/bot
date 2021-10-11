const { Client } = require("discord.js");
require('dotenv').config()
const client = new Client({
    intents: ["GUILDS", "GUILD_BANS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});

require("./handlers/client.js")(client);
require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);

client.login(process.env.TOKEN);