var express = require("express");
var router = express.Router();

const BuildingController = require("../controllers/buildingController");

router.get("/chat", BuildingController.generateChat);

module.exports = router;



//app.use("/chat", chatRouter);