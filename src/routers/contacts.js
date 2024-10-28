import { Router } from 'express';
import {
  getContactsController,
  getContactIdController,
  createContactController,
  updateContactContoller,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import express from 'express';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';

const router = Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactIdController));

router.post('/', jsonParser, isValidId, validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/:contactId', jsonParser, isValidId, validateBody(createContactSchema), ctrlWrapper(updateContactContoller));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
