const { Plant } = require("../models");

async function getPlantDetails(req, res) {
  try {
    const plantName = req.params.plantName;
    console.log("Searching for plant:", plantName);
    const baseUrl = `${req.protocol}://${req.get("host")}/plants/${plantName}`;

    const plant = await Plant.findOne({ name: plantName });

    if (!plant) {
      console.log("Plant not found in database");
      return res.status(404).send("Plant not found");
    }

    console.log("Plant found:", plant);
    res.render("plants", { plant });
  } catch (err) {
    console.error("Error fetching plant details:", err);
    res.status(500).send("Error fetching plant details");
  }
}

async function debugPlants(req, res) {
  try {
    const plants = await Plant.find({}, "name");
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: "Error fetching plants" });
  }
}

async function searchPlants(req, res) {
  try {
    const searchQuery = req.query.query;
    const searchResults = await Plant.find({
      name: { $regex: new RegExp(searchQuery, "i") },
    });

    res.render("home", { searchResults });
  } catch (err) {
    console.error("Error searching for plants:", err);
    res.status(500).send("Error searching for plants");
  }
}

async function getPlantsByCategory(req, res) {
  try {
    const categoryName = req.params.categoryName;
    const plants = await Plant.find({ category: categoryName });

    if (!plants || plants.length === 0) {
      return res.status(404).render("home", {
        errorMessage: `No plants found for the category ${categoryName}`,
      });
    }
    res.render("home", { searchResultss: plants });
  } catch (err) {
    console.error("Error fetching plants by category:", err);
    res.status(500).send("Error fetching plants by category");
  }
}

module.exports = {
  getPlantDetails,
  debugPlants,
  searchPlants,
  getPlantsByCategory,
};
