const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('Bot online!');
});

client.on('messageCreate', message => {
  if (message.content === 'こんにちは') {
    message.reply('こんにちは！');
  }
});

client.login(process.env.DISCORD_TOKEN);
