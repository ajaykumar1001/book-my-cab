import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import { devConfig } from '../config/env';
import userModel from '../resources/users/user.model';

export const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: devConfig.SECRET,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (paylod, done) => {
      userModel.findOne({ _id: paylod.id })
      .select('emailId firstName lastName role x_Co_ordinate y_Co_ordinate').exec((err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    }),
  );
};
