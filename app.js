const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const {caseNumber} = require('./util/caseNumber.js');
const {RichEmbed} = require('discord.js');

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

function doMagic8BallVoodoo() {
    var rand = ['esahn9@gmail.com:converting9',
    'robin.helleberg@web.de:Kappeln61a',
    'amyitis@comcast.net:january19',
    'trsak1@seznam.cz:skopekpetr1',
    '1paul.panther@googlemail.com:1ppanther'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagic8BallVoodooo() {
    var rand = ['gianstasi@yahoo.com:clause5',
    'merio@hotmail.se:123kanelolle123',
    'emma.shaner@gmail.com:erma123',
    'ktemple2000@gmail.com:chester123',
    'weaverjake271@gmail.com:fudge333',
    'dominick_bakker@hotmail.com:klaas123',
    'w.j.a.nelson@btinternet.com:itgdotfftiow',
    'XxLightningZapGamingxX@gmail.com:gamingplay123',
    'cgryzen2002@yahoo.com:orange1',
    'franze.yang@yahoo.com:Yy950610',
    'false404@gmail.com:r2d2c3p0',
    'tveit.erik@gmail.com:spagetti89',
    'mbubier@gmail.com:wing0ms',
    'william.fordy@hotmail.co.uk:millie.dog1',
    'mhgaillo:arsenal123'];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ban") {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

    if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
    message.guild.ban(user, 2);

    const embed = new Discord.RichEmbed()
      .setColor(0xCC0000)
      .setTimestamp()
      .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
    return client.channels.get(modlog.id).send({embed});
  };

  if(command === "help") {
    message.channel.send("Check commands here: http://eyzalts.us/alts/bot/");
  }

  if(command === "warn") {
    const user = message.mentions.users.first();
    const modlog = client.channels.find('name', 'mod-log');
    const caseNum = await caseNumber(client, modlog);
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
    const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
    const embed = new RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setFooter(`Case ${caseNum}`);
    return client.channels.get(modlog.id).send({embed});
  }

  if(command === "generate") {
    message.channel.send("**Generating...**");
      message.author.send(doMagic8BallVoodoo());
      message.author.send("Join to official discord https://discord.gg/VAwQKQG");
  }

  if(command === "clear") {
      const messagecount = parseInt(args.join(' '));
      message.channel.fetchMessages({
        limit: messagecount
      }).then(messages => message.channel.bulkDelete(messages));
  }
});

client.login(config.token);
