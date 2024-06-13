/*
               
╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by bad boys!                                               ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#0099ff')
      .setTitle('💎 bad boys Bot')
      .setDescription('Welcome to the Music Bot!\n\n- Here are the available commands:\n\n' +
        '**/play :** Start playing the songs.\n' +
        '**/ping :** check bot latency.\n' +
        '**/support :** Display support server info');

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by bad boys!                                               ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
