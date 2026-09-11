const { Plant } = require("../models");

async function getHome(req, res) {
  console.log("Home route accessed");
  try {
    const plants = await Plant.find({});
    res.render("home", { plantsList: plants });
  } catch (err) {
    console.error("Error fetching plants:", err);
    res.status(500).send("Error fetching plants from the database");
  }
}

module.exports = { getHome };
