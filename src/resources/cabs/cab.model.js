import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    cabNumber: {
      type: String,
      unique: true,
      required: true,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    model: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    isBooked: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

export default mongoose.model('cab', RoleSchema);
