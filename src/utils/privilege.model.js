import mongoose from 'mongoose';
import extendSchema from 'mongoose-extend-schema';
import BaseSchema from './baseschema';

const {
  Schema
} = mongoose;
const PrivilegeSchema = extendSchema(BaseSchema, {
  name: {
    type: String,
    unique: true,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  roles: [{
    type: String,
    required: false,
  }],
}, {
  timestamps: true,
  strict: true,
}, );
export default mongoose.model('privilege', PrivilegeSchema);