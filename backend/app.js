const express = require("express");
const cors = require("cors");
const bookRouter = require("./routes/bookRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/books", bookRouter);

app.use("/api/auth", authRouter);

module.exports = app;
