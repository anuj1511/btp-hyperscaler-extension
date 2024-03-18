import express, { Request, Response } from 'express';
import { promises as fsPromises } from 'fs';
const MESSAGE_FILE_PATH: string = "src/database/messages.json";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const index: number = req.body.body.index;

        let data = await fsPromises.readFile(MESSAGE_FILE_PATH, 'utf8');
        const jsonData = JSON.parse(data);

        if(index < 0 || index >= jsonData.length) 
            return res.status(500).json({ message: 'Invalid Index!' })

        const deleted = jsonData.splice(index, 1);

        data = JSON.stringify(jsonData, null,  2);

        await fsPromises.writeFile(MESSAGE_FILE_PATH, data);

        res.status(200).json({ message: 'Successfully deleted message.' + JSON.stringify(deleted) });
    } catch (err) {
        console.error(`Error updating JSON file: ${err}`);
        res.status(500).json({ message: 'Failed to post message due to an internal server error.' });
    }
});

export default router;
