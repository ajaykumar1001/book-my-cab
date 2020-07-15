import mongoose from 'mongoose';
import extendSchema from 'mongoose-extend-schema';
import BaseSchema from '../../utils/baseschema';
import enums from '../../utils/enums';

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 */
const { Schema } = mongoose;
const UserSchema = extendSchema(BaseSchema,
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: enums.GENDER,
      required: false,
    },
    x_Co_ordinate: {
      type: String,
      required: false,
    },
    y_Co_ordinate: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: enums.ROLE,
      required: true,
    }   
  },
  {
    timestamps: true,
    strict: true,
  });

export default mongoose.model('user', UserSchema);
