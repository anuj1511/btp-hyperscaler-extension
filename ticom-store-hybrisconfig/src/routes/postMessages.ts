import express, { Request, Response } from 'express';
import UserModel from '../models/UserModel';

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, phoneNo } = req.body;

    const newUser = new UserModel({
      firstName,
      lastName,
      phoneNo
    });

    await newUser.save();

    res.status(200).json({ message: 'User successfully created.' });
  } catch (err) {
    console.error(`Error creating user: ${err}`);
    res.status(500).json({ message: 'Failed to create user due to an internal server error.' });
  }
});

export default router;
