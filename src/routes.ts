import { Router } from 'express';

import { SettingsController } from './app/controllers/SettingsController';
import { UsersController } from './app/controllers/UsersController';
import { MessagesController } from './app/controllers/MessagesController';



const routes = Router();

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

const usersController = new UsersController();

routes.post('/users', usersController.create);

const messagesController = new MessagesController();

routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes };