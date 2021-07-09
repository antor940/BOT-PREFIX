const discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'The ping Command',
  category: 'Info',
  aliases: ['pong'],
  run: async (client, message, args, prefix, config) => {
    
    message.channel.send(`Pinging...`).then(m => {
      
      let ping = m.createdTimestamp - message.createdTimestamp;
      
      let embed = new discord.MessageEmbed()
      .setTitle("")
      .setColor(config.defaultColor)
      .setDescription("")
      m.edit('', embed);
    })
  }
}
