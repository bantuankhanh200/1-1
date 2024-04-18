module.exports.config = {
    name: 'camxuc',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Auto thả cảm xúc vào tin nhắn',
    commandCategory: 'group',
    usages: '',
    cooldowns: 2, // Seconds, delay Function run
};
module.exports.handleEvent = function({
    api, event
}) {
    /*
            <---- EXAMPLES ---->
*/
    if (!global.cmds_autoreaction) return;
    if (['bot', 'bót', 'Bot'].some(i => event.body.includes(i))) return api.setMessageReaction('❤️', event.messageID, false, true);
    if (['Haha', 'Cười', 'Hihi', '😂', '🤣', ':))', ':>' , '=))', 'Vui', '((:', 'zui', 'Cay'].some(i => event.body.includes(i))) return api.setMessageReaction('😆', event.messageID, false, true);
    if (['Oh', 'Đù', 'Ghê', 'Vip', 'Chê', 'Dữ'].some(i => event.body.includes(i))) return api.setMessageReaction('😮', event.messageID, false, true);
  if (['Ngon', 'Mlem', 'Gái ngon'].some(i => event.body.includes(i))) return api.setMessageReaction('🤤', event.messageID, false, true);
  if (['Box', 'nhóm', 'checktt', 'Top'].some(i => event.body.includes(i))) return api.setMessageReaction('🤓', event.messageID, false, true);
  if (['Cc', 'Cl', 'Lồn' ,'Cặc', 'Clm', 'Clmm', 'Sợ', 'Lol' ,'Ngu',  'Ncc', 'Ncl'].some(i => event.body.includes(i))) return api.setMessageReaction('😹', event.messageID, false, true);
  if (['Yêu', 'Thưn', 'Thương', 'Hun', 'Hôn'].some(i => event.body.includes(i))) return api.setMessageReaction('❤️', event.messageID, false, true);
  if (['Khóc', 'Buồn', 'Bùn', 'Chán', ':((', ':<', '😭', '😢', ')):', 'Haiz', 'Nghèo'].some(i => event.body.includes(i))) return api.setMessageReaction('🥹', event.messageID, false, true);
  if (['Mn', 'Alo', 'Hú', 'Ê', 'Báo'].some(i => event.body.includes(i))) return api.setMessageReaction('🤔', event.messageID, false, true);
  if (['Lêu', 'Jztr', 'Gì', 'J'].some(i => event.body.includes(i))) return api.setMessageReaction('😛', event.messageID, false, true);
  if (['Bủb', 'ping',].some(i => event.body.includes(i))) return api.setMessageReaction('🐙', event.messageID, false, true);
  if (['Hello', 'Hi', 'Chào', '2', 'Hù', 'Xin chào', '✌️'].some(i => event.body.includes(i))) return api.setMessageReaction('☺️', event.messageID, false, true);
  if (['Bye', 'Pp', 'Tạm biệt', 'Off'].some(i => event.body.includes(i))) return api.setMessageReaction('👋', event.messageID, false, true);
  if (['Ngủ', 'Ngủ ngon', 'Đi ngủ'].some(i => event.body.includes(i))) return api.setMessageReaction('😴', event.messageID, false, true);
  if (['?', '🌝', 'Chảnh', 'Nhếch', 'Tuổi', '-.-'].some(i => event.body.includes(i))) return api.setMessageReaction('😚', event.messageID, false, true);
  // Nếu tìm thấy "bot" hoặc "bót" trong tin nhắn người dùng -> Bot sẽ thả cảm xúc ("😎", ID tin nhắn, gọi lại hàm: tắt, buộc tùy chỉnh icon: bật)
};
module.exports.run = function({
    api, event
}) {
    global.cmds_autoreaction = !global.cmds_autoreaction? true: false;
    api.sendMessage('O' + (global.cmds_autoreaction? 'n': 'ff') + ' ' + this.config.name, event.threadID, event.messageID);
};