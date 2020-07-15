import express from 'express';
import passport from 'passport';
import userController from './user.controller';
import { permission } from '../../middlewares/permission';

export const userRouter = express.Router();

userRouter.post('/signup', userController.signup);

userRouter.post('/login', userController.login);

userRouter.put('/setCoordinates',passport.authenticate('jwt'), permission(['set_coordinates']), userController.setCoordinates);