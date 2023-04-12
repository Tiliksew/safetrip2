const path = require("path");
require("dotenv").config();
const PORT = process.env.port || 5000;
const express = require("express");
require('./config/db.config').connect()
const userRoutes = require("./routes/user.route");
const app = express();
const cors = require("cors");

app.use(cors());



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRoutes);

app.use("*", (req, res) => {
  res.status(200).json({message: "Hello Rahul Tanwar(SafeTrip). Welcome to my api"});
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
module.exports = app;