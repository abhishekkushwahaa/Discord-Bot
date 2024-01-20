const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("shorturl")) {
    const url = message.content.split("shorturl")[1];
    return message.reply({ content: "Generating short url for" + url });
  }
  message.reply({ content: "Hello, from Abhishek's Bot" });
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    interaction.reply({ content: "Pong!" });
  }
});

client.login(
  "MTE5ODE2MDI1ODg4ODEwNjA3NA.GixVR6.YqUJUcmixEWDkT4FAmhnZO0MH20TxWxrmNZD4Q"
);
