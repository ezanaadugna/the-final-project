require('dotenv').config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");


// Set up routes 

const BuildingController = require('./controllers/buildingController');
const buildingRoutes = require('./routes/buildingRoutes')
//var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
const chatRouter = require("./routes/chat");


var app = express();

// setup for receiving JSON

app.use(cors());
app.use('/api', buildingRoutes);

app.get('/buildings', BuildingController.getBuildingsInArea);
//app.get('/buildings/:id', BuildingController.getBuildingDetails);

const http = require('http');

const port = 3000; 
const server = http.createServer((req, res) => {
  res.end('Hello this is the building/maps team!');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
//app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use("/chat", chatRouter);

// Define your API routes and middleware here, if needed

// Define a basic route for testing purposes
// app.get('/', (req, res) => {
//   res.send('Hello from your backend server!');
// });

const http = require('http');

const port = 3000; // Choose your desired port number
// const server = http.createServer((req, res) => {
//   res.end('Hello, this is your Node.js server! hello this is a building');
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// catch 404 and forward to error handler, code to be ADDED HERE.

module.exports = app;