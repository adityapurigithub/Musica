import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import * as dotenv from "dotenv";
import User from "../models/user.js";
dotenv.config();

let options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;
export default (passport) => {
  passport.use(
    new JwtStrategy(options, function (jwt_payload, done) {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          return done(err, false);
        });

      //#$* new verion of mongo..model.findById() doesnot accept callback
      // function (err, user) {
      //   if (err) {
      //     return done(err, false);
      //   }
      //   if (user) {
      //     return done(null, user);
      //   } else {
      //     return done(null, false);
      //     // or you could create a new account
      //   }
      // });
    })
  );
};
