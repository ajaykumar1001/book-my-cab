import express from 'express';
import { userRouter } from './users/user.router';
import { bookingRouter } from './bookings/booking.router';
import { cabRouter } from './cabs/cab.router';

export const restRouter = express.Router();

restRouter.use('/', userRouter);

restRouter.use('/', bookingRouter);

restRouter.use('/', cabRouter);


