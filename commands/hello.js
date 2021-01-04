const execute = (bot, msg, args) => {
  return msg.reply('hello');
};

module.exports = {
  name: 'hello',
  help: 'hello world!',
  execute,
};
