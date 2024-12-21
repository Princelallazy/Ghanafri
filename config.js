//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "263718990351";
global.owner = process.env.OWNER_NUMBER || "263718990351";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NjanBhUGYrWkNVenNQcGg2alh6eWN6M0wxVUlBQlV5NTRmWDdxa1RVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzd6WjVRL3dFQS9HdWJNK0xFaEVLWTIyM0E3bDJMTWZIaUV0TzE2M2ppND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSUduK3kzL1FrbURxUnhpYXBnbmZWcWJ6YnJKdkJWQkh1Z0NVaWNoV25zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIK3BmaXd3TGlIVXFOdzQ0c2N6Z3lacC9LZVlEblIrZHBJdTBWYy9TTHlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLb3BsNWR3aWtCZ2grMlRTWEhRc0tkc0FlaXdmeUhrUjZhNUZyUGE3bE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkbXhWc0RJR1Z3dFRZamxHMjJPcEQ2aUlsSTJLa2h4T05rbXJuS3NqbU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdWZ3hHVndWeU9kQlNhcUgzQkVQSDl1ckNablhzaVRtRWloSFdteEhYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3d1dWoxYm5wSkd0K2NuaWlnZ2JWaGgzcERNLzU0WVQrd3JLVmZ3MWtEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QR0ZvbVBPbGZFWjFLeUs3VFVwOUp3eDdrNml3VG44Wjl0NzVjU3BxaTFVR0gzN21seEEyYkgzakdmeWhCNFVuWGU5SUlNYVlqbnZneEFjM0Z3ekFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6IlpkR2I4bHo4enFPSCs2ZE5vRFp2TWxTMEozbGJBTjRaRFRCYWxWeHZ3UE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlMMmsyQ0c4UU1DYWwzU09WM19iQUEiLCJwaG9uZUlkIjoiODBhZmI1ZjItOGM3Ni00NWVmLWJhYjItZTkzMDJlMGJkNzQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtrY3pDRVk1ZnZYd3pLS3p3dER5TVYzcFMrST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eDB4RHFLN25YNzZLaUl3OHIwd1hPbUlNVDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1NSNUU3QUsiLCJtZSI6eyJpZCI6IjI2MzcxODk5MDM1MToxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZi+8J2ZrvCdmZfwnZma8J2Zp/CdmaLwnZmW8J2ZqPCdmanwnZma8J2ZpyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1VdE9JRkVLK1RtcnNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidDhZazJJZlJIcnRCaHpZbGJPM0dWeTJkMFdNL1AzbHJjdXcvVGdkWHNCbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkduOXN5SGNic0tHamdxaHZpeHdNYUdsVS84djNPaERBMlRHd1YydUdEUWxpQmo5K2MvbzNuVzc2aU9nUHczS3RWVUVrWkkvK2JmUFNZeW1FVjNuQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjhQM25RbmlRNDJYYUlRNk5pN25VUW92UnZhWExGVCtUZXFUQmx0dFBqbGxtZ3Z3Umt6UWFRUVNUdkdpUWt1SFdiRG9vblkwdG5DNDlhUjBSRVk4dkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE4OTkwMzUxOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJmR0pOaUgwUjY3UVljMkpXenR4bGN0bmRGalB6OTVhM0xzUDA0SFY3QWEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ3NzMxODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRkFnIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
