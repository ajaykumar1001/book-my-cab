import jwt from 'jsonwebtoken';
import { devConfig } from '../config/env';

export default {
  issue(payload, expiresIn) {
    return jwt.sign(payload, devConfig.SECRET, {
      expiresIn,
    });
  },
};
