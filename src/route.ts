import {Router} from 'express'

import { UserRegisterController } from './controllers/users/UserRegisterController';
import { UserUpdateController } from './controllers/users/UserUpdateController';
import { UsersReadController } from './controllers/users/UsersReadController';

const routes = Router();

//routes.post('/teste', new UserRegisterController().handle);

routes.get('/users', new UsersReadController().handle);
routes.post('/register', new UserRegisterController().handle);
routes.put('/update', new UserUpdateController().handle);

export {routes}