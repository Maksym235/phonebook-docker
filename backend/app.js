const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const contactsRouter = require("./routers/contacts");
const authRouter = require("./routers/auth");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());

app.use("/contacts", contactsRouter);
app.use("/auth", authRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
