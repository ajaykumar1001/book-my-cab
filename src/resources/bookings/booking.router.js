import express from 'express';
import passport from 'passport';
import bookingController from './booking.controller';
import { permission } from '../../middlewares/permission';

export const bookingRouter = express.Router();

bookingRouter.get('/booking', passport.authenticate('jwt'), permission(['view_booking_history']), bookingController.getMyBookings);


bookingRouter.post('/booking', passport.authenticate('jwt'), permission(['book_cab']), bookingController.bookingRequest);