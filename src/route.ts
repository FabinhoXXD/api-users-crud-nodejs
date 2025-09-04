import {Router} from 'express'

import { UserRegisterController } from './controllers/users/UserRegisterController';
import { UserUpdateController } from './controllers/users/UserUpdateController';
import { UsersReadController } from './controllers/users/UsersReadController';
import { UserDeleteController } from './controllers/users/UserDeleteController';
import { UserReadController } from './controllers/users/UserReadController';

const routes = Router();

//routes.post('/teste', new UserRegisterController().handle);

routes.get('/users', new UsersReadController().handle);
routes.get('/user/:id', new UserReadController().handle);
routes.post('/register', new UserRegisterController().handle);
routes.put('/update', new UserUpdateController().handle);
routes.delete('/delete/:id', new UserDeleteController().handle);

export {routes}