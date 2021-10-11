const { Permissions, Client, Message } = require("discord.js");

module.exports = {
    name: "ping",
    description: "ping = pong = bot.",
    perms: {
        client: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.EMBED_LINKS],
        user: [Permissions.FLAGS.SEND_MESSAGES]
    },
    aliases: [],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {STring[]} args 
     */
    execute: async (client, message, args) => {
        message.reply({
            content: `Pong pong pong`,
        });
    }
}