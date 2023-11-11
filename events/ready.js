const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        try {
            client.user.setActivity('TEMPLATE', { type: ActivityType.Listening });
            const guilds = client.guilds.cache;

            console.log(`'${client.user.tag}' is now online and connected to the following discord servers:`);
            guilds.forEach(guild => {
                console.log(`- ${guild.name}`);
            });
        } catch (error) {
            console.error('Error setting activity:', error);
        }
    },
};