import bookingModel from "./booking.model";

export default {

  async getMyBookingsForCustomer(userId){
    return bookingModel.find({ customer : userId }).populate('driver').populate('cab');
  },

  async getMyBookingsForDriver(userId){
    return bookingModel.find({ driver : userId }).populate('customer').populate('cab');
  },

  async bookCab(obj){
    return bookingModel.create(obj);
  },
  
}