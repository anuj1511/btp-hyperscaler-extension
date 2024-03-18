import express, { Request, Response } from 'express';
import { promises as fsPromises } from 'fs';
const MESSAGE_FILE_PATH: string = "src/database/messages.json"

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const data = await fsPromises.readFile(MESSAGE_FILE_PATH, 'utf8');
        const jsonData = JSON.parse(data);
        res.status(200).json({  data: jsonData });
    } catch (err) {
        console.error(`Error reading JSON file: ${err}`);
        res.status(500).json({ message: 'Failed to retrieve messages due to an internal server error.' });
    }
});

export default router;
