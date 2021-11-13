const Command = require('../../structures/Command');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'restart',
        aliases: [ 'reboot' ],
        description: 'Restart the bot!',
        category: 'Owner',
        ownerOnly: true
      });
    }

    async run(message) {
      await message.channel.send(`<a:R1:906311770434576404> Restarting! Check <#907879524568555560> To make Sure I Restarted!`).catch(err => this.client.console.error(err));
      process.exit(1)
    }
};
