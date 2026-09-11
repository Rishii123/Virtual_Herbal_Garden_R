const express = require("express");
const router = express.Router();
const plantController = require("../controllers/plantController");

router.get("/debug/plants", plantController.debugPlants);
router.get("/search", plantController.searchPlants);
router.get("/category/:categoryName", plantController.getPlantsByCategory);
router.get("/plants/:plantName", plantController.getPlantDetails);

module.exports = router;
