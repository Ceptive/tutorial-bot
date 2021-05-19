//========================================CONSTANTS ON READY========================================
const Discord = require('discord.js')
const client = new Discord.Client()
const { botInfo, prefix, token }
//==============================================LOGIN===============================================
client.on('ready', () => {
  console.log("Online")
})
