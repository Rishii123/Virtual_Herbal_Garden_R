const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  botanicalName: { type: String, required: true },
  commonNames: { type: [String], required: true },
  category: { type: [String], required: true },
  habitat: {
    nativeRegion: { type: String, required: true },
    growingConditions: {
      soil: { type: String, required: true },
      sunlight: { type: String, required: true },
      water: { type: String, required: true },
    },
  },
  medicinalUses: [
    {
      use: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  practicalUses: [
    {
      method: String,
      steps: [String],
      duration: String,
      benefits: String,
    },
  ],
  methodsOfCultivation: {
    propagation: { type: String, required: true },
    planting: {
      instructions: { type: String, required: true },
      spacing: { type: String, required: true },
    },
    watering: { type: String, required: true },
    fertilization: { type: String, required: true },
    pruning: { type: String, required: true },
    pestsAndDiseases: { type: String, required: true },
  },
  imageUrl: { type: String, required: true },
  modelUrl: { type: String, required: true }, // used by the 3D viewer on the plant detail page — left untouched
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
