# discord-template-bot

A template for a discord bot using discordjs.

# Dependencies
- [Node.js](https://nodejs.org/en/) (v12.0.0 or newer)
- [Git](https://git-scm.com/downloads)

# Assumptions
- Using Node.js v18.13
- Using Discord.js v14.13

Might break at some point with newer/older versions.

# Setup from Remote

1. Clone the repository
```
# Using HTTPS
git clone https://github.com/0xEvolex/discord-template-bot.git

# Using SSH
git clone git@github.com:0xEvolex/discord-template-bot.git
```

2. Run `npm install` from the root directory
3. Create a `.env` file in the root directory
5. Open the `.env` file and add the following line:
```
DISCORD_BOT_TOKEN=your_token_here
```
If you don't know how to get a discord bot token, follow [this guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

6. Run `node .` from the root directory to start the bot

# Setup from Local

1. Run `git init` in your desired directory
2. Create the repository on GitHub
3. Run `git remote add origin git@xyz.git` to add the remote repository
4. Run `git push -u origin main` to push the local repository to the remote repository


