const passport = require("passport");

function authJwtAccess(req, res, next) {
  passport.authenticate("jwt-access", { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.user = user;
    next();
  })(req, res, next);
}

module.exports = { authJwtAccess };
