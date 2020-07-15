import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    cab: {
      type: Schema.Types.ObjectId,
      ref: 'cab',
      required: true,
    },
    source_x_coordinate: {
      type: String,
      required: true,
    },
    source_y_coordinate: {
      type: String,
      required: true,
    },
    destination_x_coordinate: {
      type: String,
      required: true,
    },
    destination_y_coordinate: {
      type: String,
      required: true,
    },
    sourceAddress: {
      type: String,
      required: true,
    },
    destinationAddress: {
      type: String,
      required: true,
    },
    rideStart: {
      type: Date,
      required: true,
    },
    rideEnd: {
      type: Date,
      required: false,
    },
    rideStatus:{
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

export default mongoose.model('booking', RoleSchema);
