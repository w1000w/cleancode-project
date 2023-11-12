const express = require("express");
const cors = require("cors");
const bookRouter = require("./routes/bookRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/books", bookRouter);

module.exports = app;
