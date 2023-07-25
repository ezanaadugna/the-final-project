const express = require("express");
const router = express.Router();
const BuildingController = require("../controllers/buildingController");


router.get("/buildings", BuildingController.getBuildingsInArea);
//router.get("/buildings/:id", BuildingController.getBuildingDetails);

module.exports = router;