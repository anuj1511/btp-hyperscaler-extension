import express from 'express';
import welcomeApi from "./welcomeApi"
import getMessages from "./getMessages"
import postMessages from "./postMessages"
import removeMessage from "./removeMessage"
import editMessage from "./editMessage"

const router = express.Router();

router.use('/', welcomeApi);
router.use('/messages', getMessages)
router.use('/messages', postMessages)
router.use('/delete-message', removeMessage)
router.use('/edit-message', editMessage)

export default router;