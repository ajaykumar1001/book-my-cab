import express from 'express';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import { connect } from './config/db';
import { devConfig } from './config/env';
import { restRouter } from './resources';
import { configJWTStrategy } from './middlewares/passport-jwt';
import swagger from './utils/swagger.json'

const app = express();
const PORT = devConfig.PORT;

connect();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(passport.initialize());
app.use(passport.session());
configJWTStrategy();

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swagger));

app.use('/api', restRouter);
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}/`);
});

module.exports = app; 