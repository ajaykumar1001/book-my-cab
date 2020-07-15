import userModel from './user.model';
import cabModel from '../cabs/cab.model';
import { devConfig } from '../../config/env';

export default {

  async createUser(user){
    return userModel.create(user);
  },

  async getUserDetailsByEmailId(emailId,filter={}){
    return userModel.findOne({emailId}).select(filter);
  },

  async setCoordinates(userId,location,filter={}){
    return userModel.findOneAndUpdate({_id: userId},
      {$set: {x_Co_ordinate: location.x_Co_ordinate, y_Co_ordinate : location.x_Co_ordinate}},
      { new: true }).select(filter);
  },


}