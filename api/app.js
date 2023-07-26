require('dotenv').config();
var express = require("express");
var cors = require("cors");


var app = express();

// Set up routes 

const BuildingController = require('./controllers/buildingController');
const buildingRoutes = require('./routes/buildingRoutes')
//var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
//var chatgeneratorRouter = require("./routes/chatgenerator");



app.use(cors());
app.use('/api', buildingRoutes);
//app.use("/", indexRouter);
//app.use("/users", usersRouter);
//app.use("/chatgenerator", chatgeneratorRouter);
//app.use(express.static(path.join(__dirname, "public")));

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

// catch 404 and forward to error handler, code to be ADDED HERE.

module.exports = app;