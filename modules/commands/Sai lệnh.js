/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require('axios');
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
	const res = await axios.get(`https://chinle-api.herokuapp.com/poem`);
var poem = res.data.data;
  var link = ["https://i.imgur.com/ajaPzaH.jpg",
"https://i.imgur.com/DbvxI29.gif",
"https://i.imgur.com/vEju2MT.gif",
"https://i.imgur.com/V9Ae16l.gif",
"https://i.imgur.com/nNl0NBA.gif",
"https://i.imgur.com/eZRKuFS.gif",
"https://i.imgur.com/z3yOjlw.gif",
"https://i.imgur.com/r8vCWwB.gif",
"https://i.imgur.com/AUhk0K2.gif",
"https://i.imgur.com/AUhk0K2.gif",
"https://i.imgur.com/fSzpem9.gif",
"https://i.imgur.com/nHaYgDK.gif",
"https://i.imgur.com/Uun3bsL.gif",
"https://i.imgur.com/y1LhsAP.gif",
"https://i.imgur.com/CwpQyQI.gif",
"https://i.imgur.com/3eBX1HL.gif",    "https://i.imgur.com/eVmISqH.jpg",
"https://i.imgur.com/I8MhC3v.jpg",
"https://i.imgur.com/navTg8k.jpg",
"https://i.imgur.com/cZDQAdg.png",
"https://i.imgur.com/LShlgQW.jpg",
"https://i.imgur.com/d9zRaUS.png",
"https://i.imgur.com/7hOxLV6.jpg",
"https://i.imgur.com/9FCqbfD.jpg",
"https://i.imgur.com/wOEHgrT.jpg",
"https://i.imgur.com/hhrSCnF.jpg",
"https://i.imgur.com/rIuzU66.jpg",
"https://i.imgur.com/y12sIeU.jpg",
"https://i.imgur.com/G8ttqlk.jpg",
"https://i.imgur.com/QZ2QQC4.jpg",
"https://i.imgur.com/bnEclt0.gif",
"https://i.imgur.com/McnLVx0.jpg",
"https://i.imgur.com/6OQ0SZc.png",
"https://i.imgur.com/SbUKUOx.gif",
"https://i.imgur.com/KJICOIx.jpg",
"https://i.imgur.com/8IbH4We.jpg",
"https://i.imgur.com/8IbH4We.jpg",
"https://i.imgur.com/0GBsIO0.jpg",
"https://i.imgur.com/vR2Vkdm.jpg",
];
var callback = () => api.sendMessage({body:`🌺𝘼𝙙𝙢𝙞𝙣: min cu te-hay dỗi 💖\n💖Thính: ${poem}\n zalo:0354766612\n${gio}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };