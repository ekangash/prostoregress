import {NextResponse} from "next/server";
import TelegramBot from "node-telegram-bot-api";

export async function POST (request: Request) {
    try {
        const {title, cast, fullname, message, email, tg_login} = await request.json();
        const sendMessage = `Имя: ${fullname}\nСообщение: ${message}\nПочта: ${email}\nТелеграмм: ${tg_login}\nСтоимость: ${cast}\nСеанс: ${title}`
        const token = String(process.env.BOT_TOKEN);
        const bot = new TelegramBot(token, { polling: false })
        const chatId = Number(process.env.BOT_ID);
        bot.sendMessage(chatId, sendMessage);

        return new NextResponse(JSON.stringify({ }), { status: 200 });
    } catch (exception) {
        return new NextResponse(JSON.stringify({ message: 'Не удалось отправить сообщение. Пожалуйста, попробуйте войти снова или обратитесь в службу поддержки.', exception }), { status: 500 });
    }
}