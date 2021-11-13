const Event = require('../../structures/Event');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const logger = require('../../utils/logger');
const config = require('../../config.json');
const webhookClient = new Discord.WebhookClient(config.webhook_id, config.webhook_url);

module.exports = class extends Event {
  constructor(...args) {
    super(...args)
  }

  async run() {
    logger.error(`Shard ${this.client.shard.ids - 1 + 2}/${this.client.shard.count} has disconnected`, { label: `Shard` })
    


      const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`Rover: [${this.client.shard.ids - 1 + 2}/${this.client.shard.count}] Disconnected`)
        .setTimestamp()
      
      webhookClient.send(embed)
    
  }
}
