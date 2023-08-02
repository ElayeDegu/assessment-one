const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();
const { readdirSync } = require("fs");

// Create Express App
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

// Apply Middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running at ${port}`));
