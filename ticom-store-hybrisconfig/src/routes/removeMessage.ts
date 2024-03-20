import express, { Request, Response } from 'express';
import UserModel from '../models/UserModel';


const router = express.Router();

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const messageId = req.params.id;

    console.log(messageId);

    const deletedMessage = await UserModel.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found.' });
    }

    res.status(200).json({ message: 'Message successfully deleted.', deletedMessage });
  } catch (err) {
    console.error(`Error deleting message: ${err}`);
    res.status(500).json({ message: 'Failed to delete message due to an internal server error.' });
  }
});

export default router;
