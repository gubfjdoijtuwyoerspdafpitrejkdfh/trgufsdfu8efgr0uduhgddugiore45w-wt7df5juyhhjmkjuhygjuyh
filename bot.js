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




client.on('message' , message => {
var prefix = "&"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("427919028934279179").send(
    "\n" + "**" + "السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + "المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + "الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("𝒟ℰ𝒜𝒯ℋ { Bot } By: TM - هبيد عالمي#9216 ")
                                                

message.channel.send(embed);


}
    
});




client.on('message', message => {
if (message.content.startsWith(prefix + "avatar")) {
  var mentionned = message.mentions.users.first();
var x5bzm;
if(mentionned){
    var x5bzm = mentionned;
} else {
    var x5bzm = message.author;
    
}
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(`${x5bzm.avatarURL}`)
message.channel.sendEmbed(embed);
}
});


client.on("message", message => {    
    if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content === prefix + "s-avatar"){ 
    const embed = new Discord.RichEmbed()

.setTitle(`صورة ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor('RANDOM')
.setImage(message.guild.iconURL)

message.channel.send({embed});
}
});




client.on('message', message => {
    if (message.content === "&rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});






































































client.login(process.env.BOT_TOKEN)
