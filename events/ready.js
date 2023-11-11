const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        try {
            console.log(`[INFO] Node.js version: ${process.version}`);
            console.log(`[INFO] Discord.js version: ${require('discord.js').version}`);

            client.user.setActivity('TEMPLATE', { type: ActivityType.Listening });
            const guilds = client.guilds.cache;

            console.log(`[INFO] '${client.user.tag}' is now online and connected to the following discord servers:`);
            guilds.forEach(guild => {
                console.log(`- ${guild.name}`);
            });
        } catch (error) {
            console.error('[ERROR] Error setting activity:', error);
        }
    },
};