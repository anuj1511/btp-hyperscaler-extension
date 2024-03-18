import express, { Request, Response } from 'express';
import { promises as fsPromises } from 'fs';
const MESSAGE_FILE_PATH: string = "src/database/messages.json";

const router = express.Router();

router.put("/", async (req: Request, res: Response) => {
    console.log("edit called")
    try {
        console.log(req.body.body);
        const { index, updatedMessage } = req.body.body;
        console.log(index, updatedMessage);

        let data = await fsPromises.readFile(MESSAGE_FILE_PATH, 'utf8');
        const jsonData = JSON.parse(data);

        if(index <  0 || index >= jsonData.length) {
            return res.status(400).json({ message: 'Invalid Index!' });
        }

        jsonData[index] = updatedMessage;

        data = JSON.stringify(jsonData, null,   2);

        await fsPromises.writeFile(MESSAGE_FILE_PATH, data);

        res.status(200).json({ message: 'Successfully edited message.', data: updatedMessage });
    } catch (err) {
        console.error(`Error updating JSON file: ${err}`);
        res.status(500).json({ message: 'Failed to edit message due to an internal server error.' });
    }
});

export default router;
