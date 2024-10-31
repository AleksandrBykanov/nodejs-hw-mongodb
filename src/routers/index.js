import { Router } from 'express';
import contactsRoutes from './contacts.js';
import authRoutes from './auth.js';

const routes = Router();

routes.use('/contacts', contactsRoutes);
routes.use('/auth', authRoutes);

export default routes;