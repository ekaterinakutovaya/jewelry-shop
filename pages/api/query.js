import { sendNotification } from "lib/telegram";

const handler = async (request, response) => {
    switch (request.method) {
        case "POST":
            const { caption, photo, parseMode } = request.body;
            await sendNotification(caption, photo, parseMode);
            response.status(200)
                .json({ message: 'Query sent successfully' });
            break;
        default:
            response.status(405)
                .end("This method is not allowed for this route.");
    }
};

export default handler;