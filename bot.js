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
            .setFooter('𝒟ℰ𝒜𝒯ℋ { Bot } Created By:TM - Zetrex#9216')
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

            client.on('message', message => {
                 var prefix = "&";
                if(message.content === prefix + "inv") {
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
     .setFooter("𝒟ℰ𝒜𝒯ℋ { Bot } Created By:TM - Zetrex#9216 ")
                                                

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
              if(!message.channel.guild) return;
    if(message.content.startsWith('&bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "𝒟ℰ𝒜𝒯ℋ { Bot } Created By:TM - Zetrex#9216";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`${message.guild.members.size} :تم إرسال البرودكاست و عدد المستلمين`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('برودكاست')
       .addField('اسم السيرفر', message.guild.name)
       .addField('المُرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم إلغاء البرودكاست**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });



client.on('message', msg => {

  if(msg.content.startsWith('&suggest')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggests')) return msg.reply('`suggests` **يجب على الإدارة صنع روم بأسم**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('الرجاء كتابة الاقتراح')
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggests')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggests').send(`
      ${msg.member} **:تم الإقتراح من قبل**
      **:الإقتراح**
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('👍')
        message.react('👎')
      })
      }
    }

});



client.on('message', message => {
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', '𝑹𝑬𝑷𝑶𝑹𝑻')) return message.channel.send('`𝑹𝑬𝑷𝑶𝑹𝑻` **يجب على الإدارة صنع روم بأسم**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**منشن شخص يتم التبليغ عليه**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**أكتب السبب**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}: تم التبليغ بواسطة`)
    .addField('**:تم التبليغ على**', `${name1}`, true)
    .addField('**:تم التبليغ في روم**', `${message.channel.name}`, true)
    .addField('**:السبب**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'report').sendEmbed(abod)
    message.reply('**شكراً لأنك بلغت**').then(msg => msg.delete(3000));
    }
});



client.on('message', message => {
    if (message.content.startsWith("&bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`***${bans.size}*** عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});



client.on('message', message => {
                    var prefix = "&";

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("𝒟ℰ𝒜𝒯ℋ { Bot } Created By:TM - Zetrex#9216")  
    message.channel.sendEmbed(id);
})
}
    

         
     });




client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "Ri")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعظاء الذي لديهم نفس الرتبة',role.members.size,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});














































client.login(process.env.BOT_TOKEN)
