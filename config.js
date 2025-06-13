const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "put your session id here",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "SEEN YOUR STATUS BY HAÏTI-MD",
  WELCOME: process.env.WELCOME || "true",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p1xybt.jpg",
  PREFIX: process.env.PREFIX || ".",
  BOT_NAME: process.env.BOT_NAME || "HAÏTI-MD",
  STICKER_NAME: process.env.STICKER_NAME || "your name",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "❤️💛💚💙💜🧡🤍🖤",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "your number"
OWNER_NAME: process.env.OWNER_NAME || "your name",
  DESCRIPTION: process.env.DESCRIPTION || "🧠 created by 𝘿𝘽𝙋🌹✮͢≛⃝𝙇𝙊𝙍𝙀𝙉𝙕O~"
//add bot owner name 
ALIVE_IMG: process.env.ALIVE_IMG || "image"
//add img for alive msg 
LIVE MSG:process.env.LIVE_MSG ||"> Zinda
// add alive msg
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "put your session id here",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "SEEN YOUR STATUS BY HAÏTI-MD",
  WELCOME: process.env.WELCOME || "true",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p1xybt.jpg",
  PREFIX: process.env.PREFIX || ".",
  BOT_NAME: process.env.BOT_NAME || "HAÏTI-MD",
  STICKER_NAME: process.env.STICKER_NAME || "your name",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "❤️💛💚💙💜🧡🤍🖤",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50935947307",
OWNER_NAME: process.env.OWNER_NAME || "𝘿𝘽𝙋🌹✮͢≛⃝𝙇𝙊𝙍𝙀𝙉𝙕O",OWNER_NAME: process.env.OWNER_NAME || "your name",
  DESCRIPTION: process.env.DESCRIPTION || "🧠 created by 𝘿𝘽𝙋🌹✮͢≛⃝𝙇𝙊𝙍𝙀𝙉𝙕O~"
// add alive msg here
READ_MESSAGE: process.env.READ_MESSAGE || "false", // Turn true or false for automatic read msg
AUTO_REACT: process.env.AUTO_REACT || "false",     // make this true or false for auto react on msgs
ANTI_BAD: process.env.ANTI_BAD || "false",         // false or true for anti bad words
MODE: process.env.MODE || "public",                // make bot public-private-inbox-group
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false", // make anti link true,false for groups
AUTO_VOICE: process.env.AUTO_VOICE || "false",     // make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false", // make true for automatic stickers
AUTO_REPLY: process.env.AUTO_REPLY || "false",     // make true or false automatic text reply
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false", // maks true for always online
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",    // make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",   // true for automatic show typing
READ_CMD: process.env.READ_CMD || "false",         // true if want mark commands as read
DEV: process.env.DEV || "50935947307", 
// replace with your whatsapp number
ANTI_VV: process.env.ANTI_VV || "true",            // true for anti once view
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // change to -same- if you want to restore deleted msgs
// make true if you want auto reply on status
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "false",
// set the auto reply message on status reply
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in group
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone mention you
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "your img url",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prefix for bot
BOT_NAME: process.env.BOT_NAME || "HAÏTI-MD",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "your name",
// type sticker pack name
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "❤️💛💚💙💜🖤🤍🤎",
// chose custom react emojis by yourself
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links without remove member
OWNER_NUMBER: process.env.OWNER_NUMBER || "your number",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "your name",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "🤖 BOT by Inconnu boy",
// add bot owner name
OWNER_NAME: process.env.OWNER_NAME || "your name",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "🤖 BOT by Inconnu boy",
// add bot owner name
```
