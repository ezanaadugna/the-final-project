const express = require("express");
const router = express.Router();
const BuildingController = require("../controllers/buildingController");


router.get("/", BuildingController.getBuildingsInArea);
//router.get("/buildings/:id", BuildingController.getBuildingDetails);

module.exports = router;