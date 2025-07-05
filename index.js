const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Khởi tạo bot
const bot = new Eris(process.env.token, {
  intents: [] 
});

// Sự kiện khi bot sẵn sàng
bot.on("ready", () => {
  console.log(`✅ Bot đã đăng nhập với tên: ${bot.user.username}`);

  // Đặt trạng thái và hoạt động (nếu muốn)
  bot.editStatus("idle", {
    name: "...",
    type: 3               
  });
});

// Bắt lỗi
bot.on("error", console.error);

// Kết nối bot
bot.connect();
