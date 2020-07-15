import cabModel from "./cab.model"
import { devConfig } from "../../config/env"

export default {

  async getNearByCabs(x_Co_ordinate,y_Co_ordinate,filter={}){
    return cabModel.aggregate([
      {
        $lookup: {
         from: "users",
         localField: "driver",   
         foreignField: "_id", 
         as: "driverDetails"
        }
       },
       { "$unwind": "$driverDetails" },
      {$match: 
        { 'driverDetails.x_Co_ordinate' : 
        { $gte : x_Co_ordinate - devConfig.NEAR_BY_PARAMETER, $lte : x_Co_ordinate + devConfig.NEAR_BY_PARAMETER },
        'driverDetails.y_Co_ordinate' : 
        { $gte : y_Co_ordinate - devConfig.NEAR_BY_PARAMETER, $lte : y_Co_ordinate + devConfig.NEAR_BY_PARAMETER }
      }}
    ])
  }
  
}