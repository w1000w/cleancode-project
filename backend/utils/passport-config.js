const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const users = require("../models/userModel");
const { JWT_SECRET } = require("./config");

const accessTokenStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },
  (payload, done) => {
    const user = users.findUser(payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  }
);
passport.use("jwt-access", accessTokenStrategy);
