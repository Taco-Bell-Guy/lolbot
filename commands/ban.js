module.exports = {
	name: 'ban',
	description: 'Bans a user ',
	execute(message, args) {
        const user = message.mentions.users.first(); 
        const banReason = args.slice(1).join(' '); 
        if (!user) {
        try {

        if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');

        user = message.guild.members.get(args.slice(0, 1).join(' '));
        user = user.user;
        } catch (error) {
        return message.reply('Couldn\' get a Discord user with this userID!');
        }
        }
        if (user === message.author) return message.channel.send('You can\'t ban yourself');
        if (!banReason) return message.reply('You forgot to enter a reason for this ban!'); 
        if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!');

         message.guild.ban(user) 

const Discord = require("discord.js")
        const banConfirmationEmbed = new Discord.RichEmbed()
        .setColor('RED')
        .setDescription(`✅ ${user.tag} has been successfully banned!`);
        message.channel.send({
        embed: banConfirmationEmbed
        }); 


	},
};