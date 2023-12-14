import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "6877140999:AAGjOi381UdHaliZoXdRsVVBv3VwdrNAGXY";

const WebappUrl = "https://angular-tg-app-lesson.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение",
    Markup.keyboard([
      Markup.button.webApp("Отправить сообщение", `${WebappUrl}/feedback`),
    ])
  );
});

bot.on(message('web_app_data'), async ctx => {
  const data = ctx.webAppData.data.json()
  ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch();
