import express from "express";
import { ctrlWrapper} from '../utils/ctrlWrapper.js';
import { registerUserShema } from "../validation/auth.js";
import { registerUserController } from "../controllers/auth.js";
import { validateBody } from '../middlewares/validateBody.js';

const authRoutes = express.Router();
const jsonParser = express.json();

authRoutes.post('/register', jsonParser, validateBody(registerUserShema), ctrlWrapper(registerUserController));

export default authRoutes;