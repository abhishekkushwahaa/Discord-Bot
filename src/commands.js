const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "shorturl",
    description: "Create a short url for a given url",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTE5ODE2MDI1ODg4ODEwNjA3NA.GixVR6.YqUJUcmixEWDkT4FAmhnZO0MH20TxWxrmNZD4Q"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1198160258888106074"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
