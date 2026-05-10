console.log("bot start");
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log("bot start");
});

client.login(process.env.DISCORD_TOKEN);
