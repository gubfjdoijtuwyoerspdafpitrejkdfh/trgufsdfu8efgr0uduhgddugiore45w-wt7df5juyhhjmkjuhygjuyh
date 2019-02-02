const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&'
const botname = '𝒟ℰ𝒜𝒯ℋ { Bot }'
client.on('ready', () => {
client.user.setActivity(`${prefix}help || ${client}`,{type: 'WATCHING'})
  console.log(`Jac Bot is Online Now !`);
});

client.login("Token");


client.on('message', message => {
    if (message.content === (prefix + "help")) {
        console.log(`${message.author.username} Has Ran Help Command`)
message.author.send(`**
▬▬▬▬▬▬▬❰ Puplic - العامة ❱▬▬▬▬▬▬▬
» ${prefix}avatar ( عرض صوره الشخصيه )
» ${prefix}server ( عرض معلومات السيرفر )
» ${prefix}image ( عرض صور عرض السيرفر )
» ${prefix}id @SOMEONE ( عرض معلومات الشخصيه )
» ${prefix}dice __NUMBER__( قرعه )
▬▬▬▬▬▬▬❰ Staff - الادارة ❱▬▬▬▬▬▬▬
» ${prefix}ban __@NAME__ ( حظر الشخصيه )
» ${prefix}kick __@NAME__ ( طرد الشخصيه )
» ${prefix}mute __@NAME__ ( اسكات الشخصيه )
» ${prefix}unmute __@NAME__ ( فك اسكات الشخصيه )
» ${prefix}clear  ( مسح الرسائل الخاصه بلمحادثه )
» ${prefix}ct __ROOM NAME__ ( صنع روم كتابي )
» ${prefix}cv __ROOM NAME__ ( صنع روم صوتي )
● ▬▬▬▬▬▬▬⌠About JACBOT - عن جاكبوت⌡▬▬▬▬▬▬▬●
» ${prefix}ping ( سرعه اتصال جاك بوت )
» ${prefix}bot ( عرض معلومات عن البوت )
» ${prefix}support ( عرض سيرفر الدعم الفني )
» ${prefix}invite ( رابط اضافه البوت )
» ${prefix}help ( عرض قائمه المساعده الخاصه بلبوت )
» ${prefix} __MY-SUGGEST__( ارسال اقتراح لراعي البوت ) [NEW]**`);
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'avatar')) {
console.log(`${message.author.username} Has Ran Avatar Command`)
        var mentionned = message.mentions.users.first();
    var avatar;
      if(mentionned){
          var avatar = mentionned;
      } else {
          var avatar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${avatar.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', function(msg) {
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "Russia": "Russia",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
  
      if (msg.content.startsWith(prefix + 'server')) {
      if (!msg.guild) return message.reply('**Only Servers | :x:**')
  console.log(`${msg.author.username} Has Ran Server Command`)
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`${msg.guild.name}`)
      .addField('**[❖] Server Name | اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
      .addField('**[❖] OwnerShip | مؤسس السيرفر**',`**${msg.guild.owner}**`,true)
      .addField('**[❖] Server ID | معرف السيرفر**',`**${msg.guild.id}**`,true)
      .addField('**[❖] Members Count | عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('**[❖] Verification Level | مستوي الحمايه**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
      .addField('**[❖] Region | البلد**',`[** __${region[msg.guild.region]}__** ]`,true)
      .addField('**[❖] Text Channels | رومات كتابيه**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('**[❖] Voice Channels | رومات صوتيه**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('**[❖] Created At | صنع في**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

  client.on("message", message => {    
    if (message.content.startsWith(prefix + 'image')) {
console.log(`${message.author.username} Has Ran Icon Command`)
    const embed = new Discord.RichEmbed()
.setTitle(`**${botname}**`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor('RANDOM')
.setImage(message.guild.iconURL)

message.channel.send({embed});
}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'id')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**Only Servers | :x:**')
			console.log(`${message.author.username} Has Ran ID Command`)
        message.guild.fetchInvites().then(invs => {
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
          var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
        let id = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('**Your Info - معلوماتك :clipboard:**')
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField('» Your Name:', message.author.username,true)
        .addField('» Your Tag:', message.author.discriminator,true)
        .addField('» Your ID:', message.author.id,true)
        .addField('» JoinedServer AT:', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('» Invites Count:', inviteCount,true)
        .setTimestamp()
        message.channel.sendEmbed(id)
        })
    }
});

client.on('message', message => {
    let args = message.content.split(" ").slice(1).join(" ")
    let men = message.mentions.users.first()
    if(message.content.startsWith(prefix + "dice")){
        console.log(`${message.author.username} Has Ran Dice Command`)
        if(!args) return message.channel.send("**Please Write Number | :x:**")
        message.channel.send(Math.floor(Math.random() * args))
    }
});


client.on('message', message => {
    if (message.author.bot) return;
    let args = message.content.split(" ").slice(1);
      if(message.content.startsWith(prefix + 'ban')) {
      if(!message.channel.guild) return message.reply('**Only Servers | :x:**');
   console.log(`${message.author.username} Has Ran Ban Command`)
  
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Need ``BAN_MEMBERS`` | :x;**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**Bot Need ``BAN_MEMBERS`` | :x:**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("**Mention Member | :x:**");
    if(!reason) return message.reply ("**Write Reason | :x:**");
    if (!message.guild.member(user)
    .bannable) return message.reply("**Please Give ``Jac Bot`` a High Role | :x:**");
  
    const BanEmbed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**${botname}**`)
          .setDescription(`**Done Ban ${user}
  By ${message.author.username}** | :white_check_mark:`)
          .setAuthor(message.guild.name)
    message.channel.send({
      embed : BanEmbed
    })
  }
  });
  
  client.on('message', message => {
    if (message.author.bot) return;
      if(message.content.startsWith(prefix + 'kick')) {
                 if(!message.channel.guild) return message.reply('**Only Servers | :x:**');
   console.log(`${message.author.username} Has Ran Kick Command`)
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Need ``KICK_MEMBERS`` | :x:**");
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**Bot Need ``KICK_MEMBERS`` | :x:**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply("**Mention Member | :x:**");
    if(!reason) return message.reply ("**Write Reason | :x:**");
    if (!message.guild.member(user)
    .bannable) return message.reply("**Please Give ``Jac Bot`` a High Role | :x:**");
  
    const KickEmbed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**${namebot}**`)
          .setDescription(`**Done Kick ${user}
  By ${message.author.username}** `)
          .setAuthor(message.guild.name)
    message.channel.send({
      embed : KickEmbed
    })
  }
  });
  
  
  client.on('message', message => {   
  if (message.author.bot) return;
      if(message.content.startsWith(prefix + 'mute')) {
          console.log(`${message.author.username} Has Ran Mute Command`)
  if (!message.channel.guild) return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Need ``MANAGE_MESSAGES`` | :x:**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**Bot Need ``MANAGE_MESSAGES`` | :x:**").then(msg => msg.delete(5000));;
  let user = message.mentions.users.first();
  let muteRole = message.guild.roles.find("name", "Muted");
  if (!muteRole) return message.reply("**Please Create Role 'Muted' | :x:**").then(msg => {msg.delete(5000)});
  if (message.mentions.users.size < 1) return message.reply('**Mention Member | :x:**').then(msg => {msg.delete(5000)});
  let reason = message.content.split(" ").slice(2).join(" ");
  message.guild.member(user).addRole(muteRole);
  const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**${botname}**`)
          .setDescription(`**Done Mute ${user}
  By ${message.author.username} | :white_check_mark:** `)
  message.channel.send({embed : muteembed});
  var muteembeddm = new Discord.RichEmbed()
  .setAuthor(`Muted!`, user.displayAvatarURL)
  .setDescription(`You Has Been Muted By ${message.author.tag}
  `)
  .setFooter(`On: ${message.guild.name}`)
  .setColor("RANDOM")
   user.send( muteembeddm);
  }
      if(message.content.startsWith(prefix + 'unmute')) {
  if (!message.channel.guild) return;
  console.log(`${message.author.username} Has Ran UnMute Command`)
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Need ``MANAGE_MESSAGES`` | :x:**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**Bot Need ``MANAGE_MESSAGES`` | :x:**").then(msg => msg.delete(5000));;
  let user = message.mentions.users.first();
  let muteRole = message.guild.roles.find("name", "Muted");
  if (!muteRole) return message.reply("**Please Create Role 'Muted' | :x:**").then(msg => {msg.delete(5000)});
  if (message.mentions.users.size < 1) return message.reply('**Mention Member | :x:**').then(msg => {msg.delete(5000)});
  let reason = message.content.split(" ").slice(2).join(" ");
  message.guild.member(user).removeRole(muteRole);
  const unmuteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**${botname}**`)
          .setDescription(`**Done UnMute ${user}
  By ${message.author.username}** | :white_check_mark:`)
  message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
  var unmuteembeddm = new Discord.RichEmbed()
  .setDescription(`Done UnMute You! ${user}`)
  .setAuthor(`${botname}`, user.displayAvatarURL)
  .setColor("RANDOM")
    user.send(unmuteembeddm);
  }
  });
  
  client.on('message', msg => {
    if (msg.author.bot) return;
    let args = msg.content.split(" ").slice(1);
  
      if(msg.content.startsWith(prefix + 'clear')) {
      let textxt = args.slice(0).join("");
      console.log(`${msg.author.username} Has Ran Clear Command`)
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == ""){ return msg.channel.bulkDelete(50).then (msg.channel.send("**Done Delete Messages | :white_check_mark:**"))
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("**Done Delete Messages | :white_check_mark:**").then(m => m.delete(3000));
          }    
      }
  }
  });
  
      
  client.on("message", (message) => {
      if(message.content.startsWith(prefix + 'ct')) {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**You Need ``MANAGE_CHANNELS``** | :x:");
          let args = message.content.split(" ").slice(1);
          console.log(`${message.author.username} Has Ran CT Command`)
      message.guild.createChannel(args.join(' '), 'text');
  message.channel.sendMessage('**Done Create Text Channel** | :white_check_mark:')
  
  }
  });
  
  
  client.on("message", (message) => {
      if(message.content.startsWith(prefix + 'cv')) {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**You Need``MANAGE_CHANNELS``** | :x:");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'voice');
      console.log(`${message.author.username} Has Ran CV Command`)
      message.channel.sendMessage('**Done Create Voice Channel** | :white_check_mark:')
      
  }
  });
