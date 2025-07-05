const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Tạo bot với trạng thái
const bot = new Eris(process.env.token, {
  intents: [], 
  initialPresence: {
    status: "idle", // "online" | "idle" | "dnd" | "invisible"
  },
});

bot.on("ready", () => {
  console.log(`✅ Bot đã đăng nhập với tên: ${bot.user.username}`);
});

bot.on("error", console.error);
bot.connect();
