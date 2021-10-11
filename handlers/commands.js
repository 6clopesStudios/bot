const { readdirSync } = require("fs");
const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
    readdirSync("./commands/").forEach((dir) => {
        const commandFiles = readdirSync(`./commands/${dir}/`).filter((files) => files.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(`../commands/${dir}/${file}`);
            if(!command.name) throw new Error("Cette commande manque un nom.");
            if(!command.description) throw new Error("Cette commande manque une description.")

            client.commands.set(command.name, command);
        }
    });
}