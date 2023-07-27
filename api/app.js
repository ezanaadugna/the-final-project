require('dotenv').config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Set up routes 

//const BuildingController = require('./controllers/buildingController');
const buildingRoutes = require('./routes/buildingRoutes')
const chatRouter = require("./routes/chat");
//const indexRouter = require("./routes/index");

const app = express();

// setup for receiving JSON


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/", indexRouter);
app.use('/buildings', buildingRoutes);
//app.get('/buildings', BuildingController.getBuildingsInArea);
app.use("/chat", chatRouter);
//app.get('/buildings/:id', BuildingController.getBuildingDetails);

module.exports = app;