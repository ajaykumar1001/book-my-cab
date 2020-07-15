import express from 'express';
import passport from 'passport';
import cabController from './cab.controller';
import { permission } from '../../middlewares/permission';

export const cabRouter = express.Router();

cabRouter.get('/getMyNearByCabs', passport.authenticate('jwt'), permission(['book_cab']), cabController.getMyNearByCabs);
