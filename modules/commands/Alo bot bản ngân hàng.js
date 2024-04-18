const fs = require("fs");
module.exports.config = {
	name: "😼",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "😼",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@ah Quân")==0 || (event.body.indexOf("ah quân")==0)) {
		var msg = {
				body: "dưới đây là tài khoản ngân hàng của admin mb phan anh quân 1617012000 momo:- 0354766612",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}