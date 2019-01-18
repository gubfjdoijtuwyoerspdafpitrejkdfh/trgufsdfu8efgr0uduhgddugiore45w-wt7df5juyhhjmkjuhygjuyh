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
        if(!message.guild.channels.find('name', 'report')) return message.channel.send('`report` **يجب على الإدارة صنع روم بأسم**').then(msg => msg.delete(5000));
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





client.on('message', message => {
 if (message.content.startsWith('=count')) {
  var norElden= new Discord.RichEmbed()
  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)
      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)
  .setColor('RANDOM')
message.channel.send({ embed: norElden });
  }
});



client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم إرسال الرابط في الخاص ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription(" صالح لمدة ساعة و استخدام عشر اشخاص")
      message.author.sendEmbed(Embed11)
    }
});




client.on('message', message => {

    if (message.content === "&lock") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("قفل الشات:white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "&unlock") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("فتح الشات:white_check_mark:")
           });
             }


});




client.on('message', message => {
    if(message.content.startsWith(prefix + 'move-all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('`MOVE_MEMBERS` :لازم يكون معاك صلاحية');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("`MOVE_MEMBERS`:لازم البوت يكون معاه صلاحية");
    if (message.member.voiceChannel == null) return message.channel.send(`لازم تكون داخل في روم صوتي علشان تسحب الأعضاء`);
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي الي انت فيه.**`)


     }
       });



client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('`MANAGE_ROLES` :لازم يكون معاك صلاحية').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('`MANAGE_ROLES` :لازم البوت يكون معاه صلاحية').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لإعطائة ميوت كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "لم يتم وضع اي سبب";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اعطائك ميوت')
    .setThumbnail(mention.user.avatarURL)
    .addField(':السيرفرف',message.guild.name,true)
    .addField(':تم إعطائك ميوت بواسطة',message.author,true)
    .addField(':السبب',reason)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('`MANAGE_ROLES` :لازم يكون معاك صلاحية').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('`MANAGE_ROLES` :لازم البوت يكون معاه صلاحية').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});




client.on('message', async message => {
    let args = message.content.split(" ");
    let command = args[0];
 
    if(command === prefix + 'ban') {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('`BAN_MEMBERS').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
 
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('`BAN_MEMBERS` :لازم البوت يكون معاه صلاحية').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
 
      let mention = message.mentions.members.first();
      if(!mention) return message.reply('**منشن عضو لحضره**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك طرد شخص رتبته اعلى منك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني طرد شخص رتبته اعلى مني**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('**لا يمكنك حضر نفسك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
 
       let duration = args[2];
       if(!duration) return message.reply('**حدد وقت زمني لإعطاء الشخص الحضر**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
 
       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'لم يتم وضع اي سبب';
 
       let thisEmbed = new Discord.RichEmbed()
       .setAuthor(mention.user.username , mention.user.avatarURL)
       .setTitle('لقد تم حضرك')
       .setThumbnail(mention.avatarURL)
       .addField(':السيرفر',message.guild.name,true)
       .addField(':تم إعطائك حضر بواسطة',message.author,true)
       .addField(':السبب',reason)
       .setFooter(message.author.tag,message.author.avatarURL);
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`User: ***( ${mention.user.username} )*** banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});



client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`لقد تم إعطاء ميوت بسبب النشر إذا كان عن طريق الخطا فتكلم مع الإدارة`**');
   
       
    }
})






client.on('guildCreate', guild => {
  client.channels.get("533978352483041280")
const embed = new Discord.RichEmbed()
   .setAuthor(`إضافت البوت إلى سيرفر جديد`)
   .setDescription(`
${guild.name} :السيرفر
${guild.owner} :صاحب السيرفر`)
         .setColor("#09fa2a")
         .setFooter('𝒟ℰ𝒜𝒯ℋ { Bot } Created By:TM - Zetrex#9216' , client.user.avatarURL)
           client.channels.get("533978352483041280").send({embed});
}

);


client.on('guildDelete', guild => {
  client.channels.get("533978352483041280")
const embed = new Discord.RichEmbed()
   .setAuthor(`طرد البوت من السيرفر`)
   .setDescription(`
${guild.name} :السيرفر
${guild.owner} :صاحب السيرفر`)
         .setColor("#ff0000")
         .setFooter('𝒟ℰ𝒜𝒯ℋ { Bot } Created By:TM - Zetrex#9216' , client.user.avatarURL)
           client.channels.get("533978352483041280").send({embed});
}

);



client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`شكرا انك ضفت الوت`)
      guild.owner.send(embed)
});





client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('&send')){
 if (message.author.id !== '427919028934279179') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '427919028934279179') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});





client.on("message", msg => {
var prefix = "&";
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
var all = msg.content.split(" ").slice(1) - msg.mentions.users.first();
if(msg.content.startsWith(prefix + "PM")) {
msg.delete(1500);
msg.channel.send(`تم الارساله الى ${men}`).then(msgS => {
msgS.delete(1500);
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let embed = new Discord.RichEmbed()
.setTitle("رساله من صاحب البوت لك")
.addField(":اسم صاحب البوت", msg.author.tag, true)
.addField(":السيرفر", msg.guild.name, true)
.addField(`:الرسالة`,`${args}`,  true)
men.sendMessage(embed);
})
}
});




client.on('message', message => {
   if(message.content.startsWith(prefix + 'help')) {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`**تم إرسال الأوامر العامة في الخاص**`)
     message.channel.sendEmbed(embed);
       }
     
   });



client.on("message", message => {
 if (message.content === "&help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#05ff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***═════════ஜ۩  أوامر الاعضاء  ۩ஜ═══════════***
**『&support/لإخذ رابط السببورت』**
**『&avatar/لإضهار صورتك』**
**『&s-avatar/لإضهار صورة السيرفر』**
**『رابط/يعطيك رابط السيرفر الي انت فيه』**
**『&servers/لإضهار السيرفرات الي ضايفين البوت』**
**『&count/لمعرفة عدد الأعضاء』**
**『&contact/لإرسال رسالة لصاحب البوت』**
**『&rooms/لمعرففة عدد الرومات』**
**『&roles/لمعرفة الرتب』**
**『&info/لإرسال معلومات البوت』**
**『&bans/لمعرفة عدد المتبندين』**
**『&id/لإرسال بعض معلوماتك』**
**『&report/للتبليغ على شخص』**
**『&suggest/لإرسال اقتراح』**
**『&invites/للمعرفة عدد الأشخاص الي جبتهم للسيرفر』**
**『&invite/لإخذ رابط البوت』**
***═════════ஜ۩  أوامر الاعضاء  ۩ஜ═══════════***
`)


message.author.sendEmbed(embed)




































































































































client.login(process.env.BOT_TOKEN)
