// Converts a list of Plant documents into the plain-text "context" block
// that gets fed to the AI model. Exact same text format as before, just
// pulled out of the chatbot route so it can be tested/reused on its own.
function buildPlantContext(plants) {
  return plants
    .map(
      (p) => `
Plant Name: ${p.name}
Botanical Name: ${p.botanicalName}
Common Names: ${p.commonNames?.join(", ")}
Category: ${p.category.join(", ")}
Habitat:
- Native Region: ${p.habitat?.nativeRegion}
- Soil: ${p.habitat?.growingConditions?.soil}
- Sunlight: ${p.habitat?.growingConditions?.sunlight}
- Water: ${p.habitat?.growingConditions?.water}
Medicinal Uses:
${p.medicinalUses.map((m) => `- ${m.use}: ${m.description}`).join("\n")}
Practical Uses:
${p.practicalUses
  .map(
    (u) => `
Method: ${u.method}
Steps:
${u.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}
Duration: ${u.duration}
Benefits: ${u.benefits}
`,
  )
  .join("\n")}
Cultivation Details:
Propagation: ${p.methodsOfCultivation?.propagation}

Planting:
- Instructions: ${p.methodsOfCultivation?.planting?.instructions}
- Spacing: ${p.methodsOfCultivation?.planting?.spacing}

- Watering: ${p.methodsOfCultivation?.watering}
- Fertilization: ${p.methodsOfCultivation?.fertilization}
- Pruning: ${p.methodsOfCultivation?.pruning}
- Pests & Diseases: ${p.methodsOfCultivation?.pestsAndDiseases}
`,
    )
    .join("\n");
}

module.exports = buildPlantContext;
