module.exports.config = {
    name: "alobot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot Version 3",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = await Users.getNameUser(event.senderID);
    switch (handleReply.type) {
        case "reply":
            {
                var idad = global.config.ADMINBOT;
                for (let ad of idad) {
                    api.sendMessage({
                        body: "Tin nhắn từ ❤" + name + ":\n" + event.body,
                        mentions: [{
                            id: event.senderID,
                            tag: name
                        }]
                    }, ad, (e, data) => global.client.handleReply.push({
                        name: this.config.name,
                        messageID: data.messageID,
                        messID: event.messageID,
                        author: event.senderID,
                        id: event.threadID,
                        type: "goibot"
                    }))
                }
                break;
            }
        case "goibot":
            {
                api.sendMessage({ body: `${event.body}`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
    }
};


module.exports.handleEvent = async({ event, api, Users, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    if (senderID == global.data.botID) return;

    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID);
    var idbox = event.threadID;
    let uidUser = event.senderID;
    let dataThread = await Threads.getData(event.threadID);
    let threadInfo = dataThread.threadInfo;
    const listAdmin = global.config.ADMINBOT;

    var tl = [
        "Yêu em <3", "Hi, chào con vợ bé:3", "Vợ gọi có việc gì không?",
        "Dạ, có em đây, yêu em không mà gọi <3. hmm...",
       `${name}` + ", không bé ơi",
      `${name}` + ", bé ghe nè",
      `${name}` + ", tấm thân này đã héo tàn, cần một ai đó trở che ☺️",
      `${name}` + ", gió bão chắc chở, hay là về ở với min đi... ;-; 😛",
      `${name}` + ", Anh quát em à?/nNói to thế á ?",
      `${name}` + ", xa nhau lâu quá rồi đấy , mình về chung 1 nhà nha ❤️",
      `${name}` + ", chơi game với min đi ☺️",
      `${name}` + ", nay min buồn quá liệu cậu có thể ib với min kh",
      `${name}` + ", gió đưa cành trúc la đà , cậu say tớ hay say nắng",
       `${name}` + ", ơ kêu mị có gì không..?????",  
       `${name}` + ", kêu gì kêu hoài vậy má", 
        `${name}` + ", dạ min ghe ạ^^",         `${name}` + ", ơi kêu min gì đó nói đi =)",
      `${name}` + ", ét ô ét ~~ min đang ngủ rồi :( tha min đi",
      `${name}` + ", min ngủ rồi kêu gi đấm cho bây giờ ^.^",
       `${name}` + ", thế giới này lắm trông gai để tớ nâng niu cậu nha ❤",
       `${name}` + ", đánh nhau với min k 🥺",
      `${name}` + ", love cậu❤️",
      `${name}` + ", yêu em ❤",
      `${name}` + ", em dỗi rồi k chơi với anh nữa huhu 🥺",
        `${name}` + ", hmmmmm gọi min có việc gì không dạ?",
       `${name}` + ", min ghe nè ❤️",
         `${name}` + ", min ngủ r đừng kêu nữa, để lại tin nhắn tí min dậy rồi đọc ok chưa >>",
      `${name}` + ", hàn vạn câu hứa chỉ là giả dối, nhưng tớ yêu cậu là thật hihi",       
        `${name}` + ", dạ có em đây:3",
        `${name}` + ", yêu min  đi rồi hãy gọi",
      `${name}` + ", chán thả thính rồi, ai cưa min đi để min đổ thử một lần nào",
      `${name}` + ", chán quá liệu mình có thể yêu nhau hông ta 🙈 💗",
       `${name}` + ", min yêu bạn nhiều lắm ❤",
      `${name}` + ", bạn có yêu min không dạ ❤",
      `${name}` + ",nắng chói quá. cậu giống như tia nắng tỏ sáng vậy :33",
      `${name}` + ",chơi game vs min đi :3 min chs game 1 mk chán quá đi hà",
           `${name}` + ", tym cậu màu gì vậy!.nếu là màu đỏ thì mình cùng chung nhịp đập r đấy hihi",
      `${name}` + ", muốn nói chuyện vs admin dz của min không =) nnhưg chắc k c rồi",
      `${name}` + ", thấy min cư te không >< thấy min cư te là dc rồi min yêu cậu❤️ love you ❤️",
        `${name}` + ", Coca và Pepsi Cậu thích cái nào,Thích tớ à!",
        `${name}` + ", Bố tiên sư mấy con muỗi, thấy người cute cứ bâu vào =.=. Ai tym cho sự cute của min đi",
         `${name}` + ", cậu đừng chửi tớ . tuy tớ nói nhìu nhưng tớ yêu cậu ❤️",
      `${name}` + ", cho tớ hỏi, tớ muốn nói là cậu có ny chư",
      `${name}` + ", chót yêu cậu giờ tính sao dc nhỉ =)",
      `${name}` + ", nhiều khi thấy cậu đáng ghét kinh khủng",
      `${name}` + ", sự cute của cậu đã lọt vào mắt min :3",
      `${name}` + ", gọi min có việc gì thế",
      `${name}` + ", ư ư ư kêu min làm gì đang bận xem phim. Roài má ơi",
      `${name}` + ", yêu min ko mà gọi😢",
      `${name}` + ", ai đó lại kêu min nx rồi nhớ min lắm à =)",
      `${name}` + ", hạnh  phúc phải tìm trong chông gai,Tương lai phải tìm trong quá khứ,Tình yêu phải tìm trong 3 chữ,Hai chữ yêu thương một chữ chờ ♥",
      `${name}` + ", min đang ế ai yêu min đi>< hứa cưng như trứng nè",
       `${name}` + ", sos trời ơi chán quá đừng gọi min nữa!!!",
      `${name}` + ", liên hệ với min qua zalo 0354766612"
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    // Gọi bot
    var arr = ["bot", "bot ơi","min","admin"," vợ ơi","box","bot oi", "yêu bot", "bot đâu"];
    arr.forEach(value => {
        let str = value[0].toUpperCase() + value.slice(1);
    if (body === value.toUpperCase() | body === value | str === body) {
            let nameT = threadInfo.threadName;
            modules = "------gọi bot ------\n";
            console.log(modules, value + "|", nameT);
            api.sendMessage(rand, threadID, () => {
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`>--^ ai đó gọi bot của min nè ^--<\n\n😛 tên box: ${nameT}\n🔰ID box: ${idbox}\n💖Name User: ${name} \n💕ID User: ${uidUser}\n🕒thời gian : ${time}\n😊♥️gọi min: ${value}`,
                        idad, (error, info) =>
                        global.client.handleReply.push({
                            name: this.config.name,
                            author: senderID,
                            messageID: info.messageID,
                            messID: messageID,
                            id: idbox,
                            type: "goibot"
                        })
                    );
                }
            });
        }
    });
}

module.exports.run = async({ event, api }) => {
    return api.sendMessage("cái gì thế baee????", event.threadID)
            }