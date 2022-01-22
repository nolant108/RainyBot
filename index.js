const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');


const TOKEN = "";


const client = new Discord.Client({
    intents: [

        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_EMOJIS_AND_STICKERS"
    ]
})

client.on("ready", () => {

    console.log(`Logged in as ${client.user.tag}`)

})


client.on('guildMemberAdd', async(member) => {

    const welcomeChannel = member.guild.channels.cache.find(c => c.id === '931987685256609812')
    const memberCount = client.guilds.cache.get('930274869973770240').members.cache.filter(member => !member.user.bot).size
    const serverIcon = member.guild.iconURL({dynamic: true})
    

    const joinEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle(`NEW CAFE JOIN! | Welcome ${member.user.username}!`)
	.setDescription(`Welcome to the Rainy Cafe`, `Please make yourself at home!`)
	.setThumbnail(serverIcon)
	.addFields(
		{ name: 'For Rules:', value: `Please go to the rules channel <#931719821152878602>`, inline: true },
		{ name: 'Want Roles?', value: `Go to the <#930589634419888168> channel, and grab some awesome roles!`, inline: true },
        { name: '\u200B', value: '\u200B' }
        )
    .addField('Current Members Here!', `${memberCount}`, true)
	.setTimestamp()

    welcomeChannel.send({embeds: [joinEmbed]})

    const addRole = member.guild.roles.cache.find(r => r.id === `934173319538806784`)
    member.roles.add(addRole)

});

client.login(TOKEN);