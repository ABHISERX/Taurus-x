const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://bit.ly/3DOgLpP";
  r_text[1] = "https://bit.ly/3cwa8fv";   


    var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭────────────────────╮
   ` + config.BOTSK + `
╰────────────────────╯
╭────────────────────╮
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
┣𝕾⃝🌺 *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ` + Config.PLK + `
┣𝕾⃝🌺 *ʙᴏᴛ* : ` + config.BOTSK + `
┣𝕾⃝🌺 *ᴠᴇʀsɪᴏɴ* : 2.0.0
┣𝕾⃝🌺 *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
┣𝕾⃝🌺 *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©919961050829
│
│
│☘︎ *ᴛᴏ ᴄʜᴇᴄᴋ ᴜᴘᴅᴀᴛᴇ ᴛʏᴘᴇ .ᴜᴘᴅᴀᴛᴇ*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴜᴘᴅᴀᴛᴇ .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʙᴏᴛ : 
│ *https://t.ly/TGSb*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʜᴇʀᴏᴋᴜ ᴀᴄᴄᴏᴜɴᴛ : 
│ *https://t.ly/coJ1*
│
│
│
│☘︎ *ɢɪᴛʜᴜʙ ʟɪɴᴋ :*
│ *https://t.ly/K9aD*
│
│
│
│☘︎ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs :*
│ *https://t.ly/oRpx*
│
│
│
│☘︎ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs :* 
│ *https://t.ly/ppzA*
│
│
│
│☘︎ *ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ :*
│ *https://bit.ly/3mcXDeb*
│
│
│
│☘︎ *ᴏᴡɴᴇʀ :*
│ *https://bit.ly/3dZkOUC*
│
│ 
│    ❏᪥ᴍᴜʜᴀᴍᴍᴇᴅ᪥❏
╰────────────────────╯

`}) 

}));
