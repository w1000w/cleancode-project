const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/authRoutes");
var morgan = require("morgan");

require("./utils/passport-config");

const app = express();
app.use(express.json());
app.use(cors());

app.use(morgan("tiny"));

app.use(passport.initialize());

app.use("/api/books", bookRouter);

app.use("/api/auth", authRouter);

module.exports = app;
