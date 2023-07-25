var express = require("express");
var cors = require("cors");


var app = express();

// Set up routes 

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var chatgeneratorRouter = require("./routes/chatgenerator");



app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/chatgenerator", chatgeneratorRouter);
app.use(express.static(path.join(__dirname, "public")));


module.exports = app;