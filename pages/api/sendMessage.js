
const handler = async (req, res) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const {name, email, message} = req.body;
    const msg = "Сообщение от: " + name + "%0A" + "Email: " + email + "%0A" + "текст: " + message;

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${msg}&parse_mode=HTML`);
        
        res.status(200).send('OK');
    } catch (error) {
        console.log(error);
    }    
};

export default handler;