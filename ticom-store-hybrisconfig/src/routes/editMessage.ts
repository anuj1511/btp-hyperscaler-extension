import express, { Request, Response } from 'express';
import UserModel from '../models/UserModel';

const router = express.Router();

router.put("/:id", async (req: Request, res: Response) => {
    try {
      const messageId = req.params.id;
  
      const updatedMessage = await UserModel.findByIdAndUpdate(
        messageId,
        req.body,
        { new: true }
      );

      if (!updatedMessage) {
        return res.status(404).json({ message: 'Message not found.' });
      }

      res.status(200).json({ message: 'Message successfully updated.', updatedMessage });
    } catch (err) {
      console.error(`Error updating message: ${err}`);
      res.status(500).json({ message: 'Failed to update message due to an internal server error.' });
    }
  });
  
export default router;