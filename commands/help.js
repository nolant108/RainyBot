const { Discord, message, member } = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Display help for the cafe bot.',
    execute(message) {
        message.channel.send(`My Commands follow as such: \n +rain help .......... The Help Command \n +rain ping ......... The Ping Pong Command`)
    //    message.channel.send(`@${member.user.username} , My Commands follow as such...`)
    }
};