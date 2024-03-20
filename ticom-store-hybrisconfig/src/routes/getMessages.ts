import express, { Request, Response } from 'express';
import UserModel from '../models/UserModel';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await UserModel.find({});
    res.status(200).json(messages);
  } catch (err) {
    console.error(`Error fetching messages: ${err}`);
    res.status(500).json({ message: 'Failed to fetch messages due to an internal server error.' });
  }
});

export default router;

