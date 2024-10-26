import { Router } from "express";
import { getContactsController, getContactIdController } from "../controllers/contacts.js";

const router = Router();

router.get('/', getContactsController);

router.get('/:contactId', getContactIdController);

export default router;