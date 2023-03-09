import {makePostRequest} from "./api";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export const sendNotification = async (caption, photo, parse_mode) => {
    const endpoint = `https://api.telegram.org/bot${token}/sendPhoto`;
    await makePostRequest(endpoint, {
      caption,
      photo,
      parse_mode,
      chatId
    });
};



