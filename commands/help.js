const execute = (bot, msg, args) => {
  let string = '==Ajuda==';
  bot.commands.forEach((command) => {
    if (command.help) {
      string += `**${process.env.PREFIX}${command.name}** : ${process.env.PREFIX}${commmand.help}`;
    }
  });
  return msg.channel.send(string);
};

module.exports = {
  name: 'help',
  help: 'exibe a ajuda de todos os comandos',
  execute,
};
