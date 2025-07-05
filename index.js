const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Tạo bot
const bot = new Eris(process.env.token);

// Khi bot đã sẵn sàng
bot.on("ready", () => {
  console.log(`✅ Bot đã đăng nhập với tên: ${bot.user.username}`);

  // Thiết lập trạng thái
  bot.editStatus("idle", {
    name: "...",
    type: 3 // Watching
  });
});

// Bắt lỗi
bot.on("error", console.error);

// Kết nối bot
bot.connect();
