const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame('&help')
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' 𝒟ℰ𝒜𝒯ℋ { Bot } Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





client.on('message', message => {
    if (message.content.startsWith("&info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``𝒟ℰ𝒜𝒯ℋ { Bot } معلومات عن`` ')
            .addField('``اسم البوت``' , `[ ${client.user.tag} ]` , true)
            .addField('``ايدي البوت``' , `[ ${client.user.id} ]` , true)
            .addField('``بريفكس البوت``' , `[ & ]` , true)
            .addField('``بنق البوت``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``عدد السيرفرات``', [client.guilds.size], true)
            .addField('``عدد الرومات``' , `[ ${client.channels.size} ]` , true)
            .addField('``عدد المستخديمن``' ,`[ ${client.users.size} ]` , true)
            .addField('``اللغه البرمجية``' , `[ Java Script ]` , true)
            .setFooter('𝒟ℰ𝒜𝒯ℋ { Bot } By: TM - هبيد عالمي#9216')
    })
}
});




            client.on('message', message => {
                 var prefix = "&";
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: 𝒟ℰ𝒜𝒯ℋ { Bot } ةفاضإل انه طغضا :arrow_left:**")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=531743219466240001&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});





















































































client.login(process.env.BOT_TOKEN)
