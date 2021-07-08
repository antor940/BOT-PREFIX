module.exports = {
  name: "hi",
  description: 'The first Command',
  category: 'Info',
  aliases: ['fir'],
  run: async (client, message, args, prefix, config) => {
    
    message.channel.send(`Hey, ${message.author}`);
    
  }
}