const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
    client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "flechaa = LGBT !",
                type: "PLAYING"
            }
        ]
    })
    console.log(`${client.user.tag} bot`);
}