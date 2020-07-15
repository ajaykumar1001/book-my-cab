import bookingService from "./booking.service";
import messages from "../../utils/messages";

export default {

    async getMyBookings(req, res) {
        try {
            let bookingHistory = [];
            if (req.user.role === 'customer') {
                bookingHistory = await bookingService.getMyBookingsForCustomer(req.user._id);
            }
            if (req.user.role === 'driver') {
                bookingHistory = await bookingService.getMyBookingsForDriver(req.user._id);
            }
            return res.status(200).send({
                success: true,
                message: messages.GET_BOOKINGS,
                data: bookingHistory
            });
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: messages.SERVER_ERROR,
                data: JSON.stringify(err)
            });
        }
    },

    async bookingRequest(req, res) {
        try {
            let bookCab = await bookingService.bookCab(req.body)
            return res.status(200).send({
                success: true,
                message: messages.CAB_BOOKED,
                data: bookCab
            });
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: messages.SERVER_ERROR,
                data: JSON.stringify(err)
            });
        }
    },
}