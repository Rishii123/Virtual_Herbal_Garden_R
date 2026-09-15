const mongoose = require("mongoose");
const Plant = require("./src/models/Plant");
require("dotenv").config();
const samplePlants = [
  {
    name: "Tulsi",
    botanicalName: "Ocimum tenuiflorum",
    commonNames: ["Tulsi", "Holy Basil", "Tulasi", "Sacred Basil"],
    category: [
      "Herbs",
      "Respiratory Health",
      "Immunity Boosting",
      "Hormonal Health",
      "Mental Health",
      "Antimicrobial",
    ],
    imageUrl:
      "https://m.media-amazon.com/images/I/711jDGV8ibL._UF894,1000_QL80_.jpg",
    modelUrl: "/models/tulsi/scene.gltf",
    habitat: {
      nativeRegion: "Indian subcontinent",
      growingConditions: {
        soil: "Well-drained, fertile soil with neutral pH",
        sunlight: "Full sunlight to partial shade",
        water: "Moderate watering, drought tolerant",
      },
    },
    medicinalUses: [
      {
        use: "Immunity Booster",
        description: "Enhances immune system and promotes overall health",
      },
      {
        use: "Anti-inflammatory & Antioxidant",
        description:
          "Contains compounds like eugenol and ursolic acid with anti-inflammatory and antioxidant properties",
      },
      {
        use: "Stress Relief",
        description:
          "Acts as an adaptogen to reduce stress and promote mental balance",
      },
      {
        use: "Respiratory Health",
        description:
          "Treats respiratory issues such as coughs, colds, and bronchitis",
      },
      {
        use: "Digestive Aid",
        description:
          "Helps in treating indigestion, bloating, and gastric issues",
      },
      {
        use: "Skin Care",
        description:
          "Used to treat acne and skin infections due to its antibacterial properties",
      },
    ],
    practicalUses: [
  {
    method: "Tulsi Tea",
    steps: [
      "Take 5-7 fresh tulsi leaves and wash them properly",
      "Boil 1 cup of water in a pan",
      "Add the tulsi leaves to the boiling water",
      "Let it boil for 5-10 minutes",
      "Turn off the heat and allow it to cool slightly",
      "Strain and drink it warm"
    ],
    duration: "Drink 1-2 times daily for at least 7-10 days",
    benefits: "Boosts immunity, relieves cold and cough, and improves respiratory health"
  },

  {
    method: "Tulsi with Honey",
    steps: [
      "Take 4-5 fresh tulsi leaves",
      "Crush them properly to extract the juice",
      "Add 1 teaspoon of honey",
      "Mix well",
      "Consume the mixture directly"
    ],
    duration: "Take twice daily (morning and night) for 5-7 days",
    benefits: "Soothes sore throat, reduces cough, and fights infections"
  },

  {
    method: "Tulsi Juice",
    steps: [
      "Take 10-12 fresh tulsi leaves",
      "Crush them using a mixer or by hand",
      "Add a little water to extract the juice",
      "Take 1-2 teaspoons of the juice",
      "Drink it on an empty stomach in the morning"
    ],
    duration: "Use once daily in the morning for 10-15 days",
    benefits: "Detoxifies the body, purifies blood, and strengthens immunity"
  },

  {
    method: "Tulsi Face Pack",
    steps: [
      "Take 5-6 tulsi leaves",
      "Crush them to form a paste",
      "Add a little rose water or honey",
      "Mix well and apply on a clean face",
      "Leave it for 15 minutes",
      "Wash off with normal water"
    ],
    duration: "Apply 2-3 times a week for 2-3 weeks",
    benefits: "Reduces acne, controls oil, and prevents skin infections"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions:
          "Sow seeds ¼ inch deep in well-prepared soil. Transplant seedlings when strong enough.",
        spacing: "12-18 inches apart",
      },
      watering: "Water moderately, ensuring soil is moist but not waterlogged.",
      fertilization: "Organic compost or a balanced organic fertilizer",
      pruning:
        "Regular pruning helps maintain shape and promotes leaf development. Pinch off flower buds.",
      pestsAndDiseases:
        "Resistant to pests but may encounter aphids, whiteflies, and spider mites. Neem oil spray can help manage pests.",
    },
  },
  {
    name: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    commonNames: ["Aloe", "Aloe Vera"],
    category: [
      "Herbs",
      "Skincare",
      "Edible Plant",
      "Pain Relief",
      "Antimicrobial",
    ],
    imageUrl:
      "https://www.shutterstock.com/image-photo/still-life-aloe-vera-plant-600nw-2332600615.jpg",
    modelUrl: "/models/aloe_vera_plant/scene.gltf",
    habitat: {
      nativeRegion: "Arabian Peninsula and other arid regions",
      growingConditions: {
        soil: "Well-drained sandy soil",
        sunlight: "Full sunlight",
        water: "Allow to dry completely between watering",
      },
    },
    medicinalUses: [
      {
        use: "Skin Hydration",
        description: "Moisturizes skin and promotes healing of wounds",
      },
      {
        use: "Digestive Health",
        description: "Aids digestion and soothes gastrointestinal issues",
      },
      {
        use: "Anti-inflammatory",
        description: "Reduces inflammation and redness on skin",
      },
      {
        use: "Hair Care",
        description: "Promotes healthy hair and scalp",
      },
    ],
    practicalUses: [
  {
    method: "Aloe Gel Application",
    steps: [
      "Take a fresh aloe vera leaf and cut it open",
      "Extract the gel using a spoon",
      "Wash your face or affected area with clean water",
      "Apply the gel evenly on the skin",
      "Leave it for 15-20 minutes",
      "Rinse with normal water"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Hydrates skin, heals wounds, and reduces irritation or burns"
  },

  {
    method: "Aloe Juice",
    steps: [
      "Take 20-30 ml aloe vera juice",
      "Add it to 1 glass of water",
      "Mix well",
      "Drink it on an empty stomach in the morning"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Improves digestion, relieves constipation, and detoxifies the gut"
  },

  {
    method: "Hair Mask",
    steps: [
      "Take fresh aloe vera gel",
      "Apply it directly to your scalp and hair roots",
      "Massage gently for a few minutes",
      "Leave it for 30 minutes",
      "Wash your hair with mild shampoo"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Reduces dandruff, nourishes scalp, and promotes hair growth"
  },

  {
    method: "Sunburn Relief",
    steps: [
      "Take fresh aloe vera gel",
      "Keep it in the refrigerator for a cooling effect",
      "Apply the chilled gel on sunburned skin",
      "Leave it for 20-30 minutes",
      "Let it absorb or rinse lightly if needed"
    ],
    duration: "Use 1-2 times daily until skin heals",
    benefits: "Provides cooling effect and speeds up healing of damaged skin"
  }
],
    methodsOfCultivation: {
      propagation: "Offsets (pups) or seeds",
      planting: {
        instructions:
          "Plant offsets in well-draining soil. Water thoroughly after planting.",
        spacing: "12-18 inches apart",
      },
      watering:
        "Water infrequently, allowing soil to dry out completely between waterings.",
      fertilization:
        "Use a diluted liquid fertilizer during the growing season.",
      pruning: "Remove dead or damaged leaves at the base.",
      pestsAndDiseases:
        "Generally pest-resistant but may be susceptible to mealybugs. Use insecticidal soap if needed.",
    },
  },

  {
    name: "Neem Tree",
    botanicalName: "Azadirachta indica",
    commonNames: ["Neem", "Indian Lilac"],
    category: [
      "Trees",
      "Shrubs",
      "Skincare",
      "Hormonal Health",
      "Antimicrobial",
    ],
    imageUrl:
      "https://mybageecha.com/cdn/shop/products/Azadirachta_indica.jpg?v=1571438650",
    modelUrl: "/models/neem_tree/scene.gltf",
    habitat: {
      nativeRegion: "Indian subcontinent and tropical regions",
      growingConditions: {
        soil: "Well-drained soil; tolerates poor soils",
        sunlight: "Full sun",
        water: "Drought-resistant once established",
      },
    },
    medicinalUses: [
      {
        use: "Antimicrobial",
        description: "Effective against bacteria, viruses, and fungi",
      },
      {
        use: "Skin Health",
        description: "Used to treat acne, eczema, and other skin conditions",
      },
      {
        use: "Dental Care",
        description: "Traditionally used in oral hygiene products",
      },
      {
        use: "Blood Sugar Control",
        description: "May help in managing diabetes",
      },
    ],
    practicalUses: [
  {
    method: "Neem Water Bath",
    steps: [
      "Take a handful of fresh neem leaves and wash them properly",
      "Boil the leaves in a bucket of water for 10-15 minutes",
      "Let the water cool down to a lukewarm temperature",
      "Strain the leaves from the water",
      "Use this water for bathing"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Treats skin infections, reduces itching, and helps cure rashes"
  },

  {
    method: "Neem Face Pack",
    steps: [
      "Take fresh neem leaves and wash them properly",
      "Crush or grind them to make a smooth paste",
      "Apply the paste on acne-prone areas or full face",
      "Leave it for 15-20 minutes",
      "Wash off with normal water"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Kills acne-causing bacteria and reduces pimples"
  },

  {
    method: "Neem Datun",
    steps: [
      "Take a fresh neem twig",
      "Chew one end to make it soft like bristles",
      "Use it to gently brush your teeth and gums",
      "Rinse your mouth with clean water after brushing"
    ],
    duration: "Use daily in the morning for long-term oral care",
    benefits: "Improves oral hygiene and prevents gum diseases"
  },

  {
    method: "Neem Oil Application",
    steps: [
      "Take a small amount of neem oil",
      "Apply it gently on the scalp or affected skin area",
      "Massage lightly for a few minutes",
      "Leave it for 30-60 minutes",
      "Wash with mild shampoo or clean water"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Treats dandruff, lice, and fungal infections"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Sow seeds in well-prepared soil. Ensure good drainage.",
        spacing: "10-15 feet apart",
      },
      watering:
        "Water regularly until established; drought-tolerant afterward.",
      fertilization: "Apply organic fertilizer during the growing season.",
      pruning: "Prune to maintain shape and remove dead branches.",
      pestsAndDiseases:
        "Generally resistant but may encounter scale insects. Neem oil can help control pests.",
    },
  },
  {
    name: "Moringa",
    botanicalName: "Moringa oleifera",
    commonNames: ["Drumstick Tree", "Horseradish Tree"],
    category: [
      "Herbs",
      "Immunity Boosting",
      "Edible Plant",
      "Hormonal Health",
      "Pain Relief",
    ],

    imageUrl:
      "https://producersmarket.com/blog/wp-content/uploads/2020/05/moringa-tree-ayurveda-producers-market.png",
    modelUrl: "/models/moringa.glb",
    habitat: {
      nativeRegion: "Indian subcontinent and Africa",
      growingConditions: {
        soil: "Well-drained, sandy loam soil",
        sunlight: "Full sunlight",
        water: "Moderate watering, drought-resistant",
      },
    },
    medicinalUses: [
      {
        use: "Nutritional Supplement",
        description: "Rich in vitamins, minerals, and antioxidants",
      },
      {
        use: "Anti-inflammatory",
        description: "Helps reduce inflammation in the body",
      },
      {
        use: "Diabetes Management",
        description: "May lower blood sugar levels",
      },
    ],
    practicalUses: [
  {
    method: "Moringa Powder Drink",
    steps: [
      "Take 1 teaspoon of moringa powder",
      "Add it to a glass of warm water or smoothie",
      "Mix it well until fully dissolved",
      "Drink it fresh"
    ],
    duration: "Use once daily in the morning for 2-3 weeks",
    benefits: "Provides essential nutrients and boosts immunity"
  },

  {
    method: "Moringa Sabzi",
    steps: [
      "Take fresh moringa leaves or drumsticks and wash them properly",
      "Chop them into small pieces",
      "Cook them with oil, spices, and other vegetables",
      "Prepare it like a normal curry",
      "Serve and eat with roti or rice"
    ],
    duration: "Eat 2-3 times a week regularly",
    benefits: "Improves digestion and strengthens bones"
  },

  {
    method: "Moringa Tea",
    steps: [
      "Take a handful of fresh moringa leaves or 1 teaspoon dried leaves",
      "Boil 1 cup of water",
      "Add the leaves to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain and drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Reduces fatigue and supports metabolism"
  },

  {
    method: "Moringa Face Pack",
    steps: [
      "Take 1 teaspoon moringa powder",
      "Add honey or curd to it",
      "Mix well to form a smooth paste",
      "Apply it on a clean face",
      "Leave it for 15-20 minutes",
      "Wash off with normal water"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Improves skin glow and reduces dullness"
  }
],

    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Plant seeds directly in soil or transplant seedlings.",
        spacing: "6-8 feet apart",
      },
      watering:
        "Water regularly during early growth, drought-tolerant afterward.",
      fertilization: "Use organic fertilizer in the growing season.",
      pruning: "Regular pruning helps promote branching.",
      pestsAndDiseases:
        "Resistant to pests; neem oil can help in case of aphid infestations.",
    },
  },

  {
    name: "Ginger",
    botanicalName: "Zingiber officinale",
    commonNames: ["Ginger"],
    category: [
      "Herbs",
      "Digestive Health",
      "Immunity Boosting",
      "Edible Plant",
      "Mental Health",

      "Pain Relief",
    ],
    imageUrl:
      "https://cdn.britannica.com/19/231119-050-35483892/Indian-ginger-Zingiber-officinale.jpg",
    modelUrl: "/models/ginger.glb",
    habitat: {
      nativeRegion: "Southeast Asia",
      growingConditions: {
        soil: "Moist, well-drained soil",
        sunlight: "Partial shade",
        water: "Consistent watering, keep soil moist",
      },
    },
    medicinalUses: [
      {
        use: "Digestive Aid",
        description: "Helps with digestion and reduces nausea",
      },
      {
        use: "Anti-inflammatory",
        description: "Eases muscle pain and soreness",
      },
    ],
    practicalUses: [
  {
    method: "Ginger Tea",
    steps: [
      "Take a small piece of fresh ginger",
      "Peel and crush or grate it",
      "Boil 1 cup of water in a pan",
      "Add the crushed ginger to the boiling water",
      "Let it boil for 5-10 minutes",
      "Strain and drink it warm"
    ],
    duration: "Drink 1-2 times daily for 5-7 days",
    benefits: "Relieves cold, cough, and sore throat"
  },

  {
    method: "Ginger with Honey",
    steps: [
      "Take a small piece of ginger and extract its juice",
      "Take 1 teaspoon of this ginger juice",
      "Add 1 teaspoon of honey",
      "Mix well",
      "Consume directly"
    ],
    duration: "Take twice daily for 5-7 days",
    benefits: "Reduces nausea and improves digestion"
  },

  {
    method: "Cooking Use",
    steps: [
      "Take fresh ginger and wash it properly",
      "Peel and chop or grate it",
      "Add it while cooking vegetables, curry, or tea",
      "Use it regularly in daily meals"
    ],
    duration: "Use daily as part of your regular diet",
    benefits: "Boosts metabolism and aids digestion"
  },

  {
    method: "Ginger Paste",
    steps: [
      "Take fresh ginger and wash it properly",
      "Grind it to make a thick paste",
      "Apply the paste on the affected joint or painful area",
      "Leave it for 15-20 minutes",
      "Wash it off with lukewarm water"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Provides relief from muscle and joint pain"
  }
],

    methodsOfCultivation: {
      propagation: "Rhizomes",
      planting: {
        instructions: "Plant rhizomes with buds facing upward.",
        spacing: "12 inches apart",
      },
      watering: "Water consistently, especially in dry conditions.",
      fertilization: "Fertilize with organic compost or fertilizer.",
      pruning: "Harvest rhizomes when mature.",
      pestsAndDiseases: "Watch for root rot in overly wet conditions.",
    },
  },

  {
    name: "Elderberry",
    botanicalName: "Sambucus nigra",
    commonNames: ["Elder"],
    category: [
      "Shrubs",
      "Respiratory Health",
      "Immunity Boosting",
      "Edible Plant",
    ],
    imageUrl:
      "https://img.freepik.com/premium-photo/american-elderberry-plant-pot-white-background_145644-68533.jpg",
    modelUrl: "/models/elderberry.glb",
    habitat: {
      nativeRegion: "Europe and North America",
      growingConditions: {
        soil: "Moist, well-drained soil",
        sunlight: "Full sunlight to partial shade",
        water: "Regular watering, especially in dry periods",
      },
    },
    medicinalUses: [
      { use: "Immune Support", description: "Helps boost the immune system" },
      {
        use: "Cold and Flu Relief",
        description: "Traditionally used to ease symptoms of cold and flu",
      },
    ],
    practicalUses: [
  {
    method: "Elderberry Juice",
    steps: [
      "Take fresh elderberries and wash them properly",
      "Remove the stems and keep only the berries",
      "Crush or blend the berries to extract juice",
      "Strain the juice to remove seeds and pulp",
      "Take a small amount and drink it"
    ],
    duration: "Use once daily for 1-2 weeks (in small quantities)",
    benefits: "Rich in antioxidants and supports immune function"
  },

  {
    method: "Elderberry Syrup",
    steps: [
      "Take fresh or dried elderberries",
      "Add them to a pan with water",
      "Boil and simmer for 15-20 minutes",
      "Mash the berries and strain the liquid",
      "Add sugar or honey and mix well",
      "Store the syrup in a clean bottle",
      "Take 1-2 teaspoons when needed"
    ],
    duration: "Use once daily during cold or for 1-2 weeks",
    benefits: "Soothes sore throat and supports respiratory health"
  }
],

    methodsOfCultivation: {
      propagation: "Cuttings or seeds",
      planting: {
        instructions: "Plant in moist, well-drained soil.",
        spacing: "6-8 feet apart",
      },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Fertilize in spring with organic compost.",
      pruning: "Prune annually to maintain shape and encourage fruiting.",
      pestsAndDiseases:
        "Resistant to most pests, but aphids may occasionally appear.",
    },
  },

  {
    name: "Astragalus",
    botanicalName: "Astragalus membranaceus",
    commonNames: ["Astragalus"],
    category: [
      "Herbs",
      "Respiratory Health",
      "Immunity Boosting",
      "Mental Health",
    ],
    imageUrl:
      "https://www.kingsseeds.co.nz/cdn/shop/files/H3007-1_75da96b4-a882-43df-babc-4fcc5fe15e3e.jpg?v=1721087044",
    modelUrl: "/models/astragalus.glb",
    habitat: {
      nativeRegion: "Asia",
      growingConditions: {
        soil: "Sandy, well-drained soil",
        sunlight: "Full sun",
        water: "Moderate watering, drought-tolerant",
      },
    },
    medicinalUses: [
      {
        use: "Immune Booster",
        description: "Helps strengthen the immune system",
      },
      { use: "Anti-inflammatory", description: "Used to reduce inflammation" },
    ],
    practicalUses: [
  {
    method: "Astragalus Tea",
    steps: [
      "Take dried astragalus root pieces",
      "Boil 1 cup of water in a pan",
      "Add the astragalus root to the hot water",
      "Let it steep for 5-10 minutes",
      "Strain the liquid",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Boosts energy and supports immune function"
  },

  {
    method: "Astragalus Soup",
    steps: [
      "Take dried astragalus root and rinse it",
      "Add it to a pot with water or broth",
      "Add vegetables or other ingredients as needed",
      "Cook the soup for 20-30 minutes",
      "Remove the root pieces before serving (optional)",
      "Serve and eat warm"
    ],
    duration: "Consume 2-3 times a week for a few weeks",
    benefits: "Nourishes the body and supports recovery"
  }
],

    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds directly in soil.",
        spacing: "12-18 inches apart",
      },
      watering: "Water moderately, allow soil to dry between watering.",
      fertilization: "Apply organic fertilizer during growing season.",
      pruning: "Prune to maintain shape.",
      pestsAndDiseases: "Resistant to pests and diseases.",
    },
  },

  {
    name: "Hawthorn",
    botanicalName: "Crataegus monogyna",
    commonNames: ["Hawthorn"],
    category: [
      "Shrubs",
      "Respiratory Health",
      "Mental Health",
      "Cognitive Functions",
    ],
    imageUrl:
      "https://cdn.britannica.com/16/140816-050-03FAF99F/Common-hawthorn-flower-plant-fruits-Eurasia-hedge.jpg",
    modelUrl: "/models/hawthorn.glb",
    habitat: {
      nativeRegion: "Europe, North America, and Asia",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Full sun to partial shade",
        water: "Regular watering",
      },
    },
    medicinalUses: [
      {
        use: "Heart Health",
        description: "Used to support cardiovascular health",
      },
      {
        use: "Blood Pressure Management",
        description: "May help in regulating blood pressure",
      },
    ],
    practicalUses: [
  {
    method: "Hawthorn Tea",
    steps: [
      "Take 1 teaspoon of dried hawthorn berries or leaves",
      "Boil 1 cup of water in a pan",
      "Add the hawthorn to the boiling water",
      "Let it boil for about 10 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 2-3 weeks",
    benefits: "Supports heart health and improves blood circulation"
  },

  {
    method: "Hawthorn Juice",
    steps: [
      "Take fresh or packaged hawthorn berry juice",
      "Dilute it with water (1 part juice, 2 parts water)",
      "Mix well",
      "Drink a small glass"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Helps regulate blood pressure and strengthens the cardiovascular system"
  },

  {
    method: "Supplement Use",
    steps: [
      "Consult a doctor before starting hawthorn supplements",
      "Follow the recommended dosage on the package",
      "Take the capsule or extract with water after meals",
      "Do not exceed the suggested dose"
    ],
    duration: "Use as advised by a healthcare professional",
    benefits: "Improves heart function and reduces risk of heart-related issues"
  },

  {
    method: "Daily Herbal Drink",
    steps: [
      "Prepare a light hawthorn infusion (like tea)",
      "Use a small quantity of berries or leaves",
      "Boil or steep in hot water",
      "Strain and drink in small amounts"
    ],
    duration: "Drink regularly in small amounts for a few weeks",
    benefits: "Enhances overall heart wellness and helps reduce stress"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Plant seeds or cuttings in well-prepared soil.",
        spacing: "10-12 feet apart",
      },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Fertilize annually with organic compost.",
      pruning: "Prune to maintain shape and remove dead wood.",
      pestsAndDiseases:
        "Resistant to most pests, but watch for aphids and caterpillars.",
    },
  },

  {
    name: "Garlic",
    botanicalName: "Allium sativum",
    commonNames: ["Garlic"],
    category: ["Herbs", "Immunity Boosting", "Edible Plant", "Antimicrobial"],
    imageUrl:
      "https://utgardens.tennessee.edu/wp-content/uploads/sites/220/2023/09/garlic.jpg",
    modelUrl: "/models/garlic.glb",
    habitat: {
      nativeRegion: "Central Asia",
      growingConditions: {
        soil: "Well-drained soil, rich in organic matter",
        sunlight: "Full sunlight",
        water: "Water regularly, but avoid overwatering",
      },
    },
    medicinalUses: [
      {
        use: "Antibacterial",
        description: "Has antibacterial and antiviral properties",
      },
      { use: "Heart Health", description: "Supports cardiovascular health" },
    ],
    practicalUses: [
  {
    method: "Raw Garlic",
    steps: [
      "Take 1-2 fresh garlic cloves",
      "Peel off the outer skin",
      "Crush or chop the cloves slightly",
      "Wait for 1-2 minutes (helps activate nutrients)",
      "Eat them on an empty stomach with water"
    ],
    duration: "Use once daily in the morning for 2-3 weeks",
    benefits: "Boosts immunity and supports heart health"
  },

  {
    method: "Garlic in Cooking",
    steps: [
      "Take fresh garlic cloves",
      "Peel and chop or crush them",
      "Add them while cooking vegetables, curry, or soups",
      "Cook properly with food",
      "Consume as part of daily meals"
    ],
    duration: "Use daily as part of your regular diet",
    benefits: "Improves digestion and helps reduce cholesterol"
  },

  {
    method: "Garlic Oil",
    steps: [
      "Take a few garlic cloves and crush them",
      "Heat them gently in coconut or olive oil",
      "Let the oil cool down",
      "Strain the oil to remove garlic pieces",
      "Apply the oil on your scalp",
      "Massage gently and leave for 30 minutes",
      "Wash with mild shampoo"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Promotes hair growth and improves scalp health"
  },

  {
    method: "Garlic with Honey",
    steps: [
      "Take 1-2 garlic cloves and crush them",
      "Add 1 teaspoon of honey",
      "Mix well",
      "Consume the mixture directly"
    ],
    duration: "Take once daily for 1-2 weeks",
    benefits: "Helps fight infections and boosts immunity"
  }
],
    methodsOfCultivation: {
      propagation: "Cloves",
      planting: {
        instructions: "Plant individual cloves in well-drained soil.",
        spacing: "4-6 inches apart",
      },
      watering: "Water regularly, but avoid waterlogging.",
      fertilization: "Apply compost or organic fertilizer.",
      pruning: "Remove flower stems to encourage bulb growth.",
      pestsAndDiseases:
        "Watch for root rot and fungal infections in overly wet soil.",
    },
  },

  {
    name: "Echinacea",
    botanicalName: "Echinacea purpurea",
    commonNames: ["Purple Coneflower"],
    category: [
      "Herbs",
      "Respiratory Health",
      "Immunity Boosting",
      "Antimicrobial",

      "Mental Health",
    ],
    imageUrl:
      "https://www.gardendesign.com/pictures/images/675x529Max/site_3/the-fuchsia-is-bright-coneflower-echinacea-hybrid-proven-winners_19651.jpg",
    modelUrl: "/models/echinacea.glb",
    habitat: {
      nativeRegion: "North America",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Full sunlight",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      { use: "Immune Support", description: "Enhances immune system" },
      { use: "Cold Relief", description: "Eases symptoms of colds" },
    ],
    practicalUses: [
  {
    method: "Echinacea Tea",
    steps: [
      "Take 1 teaspoon of dried echinacea leaves or flowers",
      "Boil 1 cup of water in a pan",
      "Add the echinacea to the hot water",
      "Let it boil or steep for 5-10 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Boosts the immune system"
  },

  {
    method: "Cold Relief",
    steps: [
      "Prepare echinacea tea as described above",
      "Drink the tea while it is warm",
      "Consume 1-2 times during the day when you have cold symptoms"
    ],
    duration: "Use for 3-5 days during cold or flu",
    benefits: "Helps reduce symptoms of cold and flu"
  },

  {
    method: "Supplement Use",
    steps: [
      "Consult a doctor before starting echinacea supplements",
      "Follow the dosage instructions on the package",
      "Take capsules with water after meals",
      "Do not exceed the recommended dose"
    ],
    duration: "Use as advised by a healthcare professional",
    benefits: "Improves immunity"
  },

  {
    method: "Daily Use",
    steps: [
      "Prepare a mild echinacea tea or infusion",
      "Use a small amount of dried leaves or flowers",
      "Drink in small quantities",
      "Do not overuse continuously"
    ],
    duration: "Use occasionally for a few weeks (not for long continuous periods)",
    benefits: "Helps prevent infections and supports overall immunity"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or divisions",
      planting: {
        instructions: "Sow seeds in well-prepared soil.",
        spacing: "12-18 inches apart",
      },
      watering: "Water regularly until established.",
      fertilization: "Fertilize lightly during growing season.",
      pruning: "Deadhead flowers to encourage more blooms.",
      pestsAndDiseases: "Generally pest-resistant.",
    },
  },

  {
    name: "Turmeric",
    botanicalName: "Curcuma longa",
    commonNames: ["Turmeric"],
    category: [
      "Herbs",
      "Skincare",
      "Immunity Boosting",
      "Edible Plant",
      "Mental Health",

      "Pain Relief",

      "Antimicrobial",
    ],
    imageUrl:
      "https://sowexotic.com/cdn/shop/products/sowexoticplantnurseryturmeric_1080x.png?v=1618502862",
    modelUrl: "/models/turmeric.glb",
    habitat: {
      nativeRegion: "India",
      growingConditions: {
        soil: "Loamy, well-drained soil",
        sunlight: "Partial shade to full sun",
        water: "Regular watering",
      },
    },
    medicinalUses: [
      {
        use: "Anti-inflammatory",
        description: "Contains curcumin, a natural anti-inflammatory compound",
      },
      { use: "Antioxidant", description: "Helps fight oxidative stress" },
    ],
    practicalUses: [
  {
    method: "Turmeric Milk",
    steps: [
      "Take 1 cup of milk and heat it",
      "Add 1/2 teaspoon of turmeric powder",
      "Mix well until fully blended",
      "Let it cool slightly",
      "Drink it warm before bedtime"
    ],
    duration: "Drink once daily at night for 1-2 weeks",
    benefits: "Boosts immunity and reduces inflammation"
  },

  {
    method: "Turmeric Face Pack",
    steps: [
      "Take a pinch of turmeric powder",
      "Add curd or honey to it",
      "Mix well to form a smooth paste",
      "Apply on a clean face",
      "Leave it for 10-15 minutes",
      "Wash off with normal water"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Brightens skin and reduces acne"
  },

  {
    method: "Turmeric Water",
    steps: [
      "Take 1 glass of warm water",
      "Add a pinch of turmeric powder",
      "Mix well",
      "Drink it on an empty stomach in the morning"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Detoxifies the body and improves digestion"
  },

  {
    method: "Wound Healing",
    steps: [
      "Take a small amount of turmeric powder",
      "Add a few drops of water to make a paste",
      "Clean the wound properly",
      "Apply the paste gently on the affected area",
      "Leave it for some time or cover with a bandage"
    ],
    duration: "Apply once daily until the wound heals",
    benefits: "Prevents infection and speeds up healing"
  }
],
    methodsOfCultivation: {
      propagation: "Rhizomes",
      planting: {
        instructions: "Plant rhizomes 2-3 inches deep in soil.",
        spacing: "12 inches apart",
      },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply organic compost or fertilizer.",
      pruning: "Harvest rhizomes when mature.",
      pestsAndDiseases:
        "Generally pest-resistant, but may occasionally suffer from root rot in overly wet conditions.",
    },
  },
  {
    name: "Ashwagandha",
    botanicalName: "Withania somnifera",
    commonNames: ["Ashwagandha", "Indian Ginseng", "Winter Cherry"],
    category: [
      "Herbs",
      "Mental Health",
      "Immunity Boosting",
      "Hormonal Health",
    ],
    imageUrl:
      "https://www.dabur.com/Medical%20Plants/Ashwagandha%20%281%29.jpg",
    modelUrl: "/models/ashwagandha.glb",
    habitat: {
      nativeRegion: "India, Middle East, Africa",
      growingConditions: {
        soil: "Dry, well-drained soil",
        sunlight: "Full sun",
        water: "Low to moderate watering",
      },
    },
    medicinalUses: [
      {
        use: "Stress Relief",
        description: "Adaptogen that helps reduce stress and anxiety",
      },
      {
        use: "Energy Booster",
        description: "Improves stamina and reduces fatigue",
      },
      {
        use: "Hormonal Balance",
        description: "Supports thyroid and reproductive health",
      },
    ],
    practicalUses: [
  {
    method: "Ashwagandha Milk",
    steps: [
      "Take 1 cup of milk and heat it",
      "Add 1/2 teaspoon of ashwagandha powder",
      "Mix well until fully blended",
      "Let it cool slightly",
      "Drink it warm before bedtime"
    ],
    duration: "Drink once daily at night for 2-3 weeks",
    benefits: "Reduces stress, improves sleep, and boosts energy"
  },

  {
    method: "Ashwagandha Powder",
    steps: [
      "Take 1/2 teaspoon of ashwagandha powder",
      "Add it to a glass of warm water or 1 teaspoon honey",
      "Mix well",
      "Consume it directly"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Enhances stamina and boosts immunity"
  },

  {
    method: "Supplement Use",
    steps: [
      "Consult a doctor before starting ashwagandha supplements",
      "Follow the dosage instructions on the package",
      "Take the capsule with water after meals",
      "Do not exceed the recommended dose"
    ],
    duration: "Use as advised by a healthcare professional",
    benefits: "Supports hormonal balance and mental health"
  },

  {
    method: "Daily Tonic",
    steps: [
      "Prepare a small amount of ashwagandha drink (milk or water-based)",
      "Use a small quantity of powder",
      "Mix well",
      "Consume regularly in small amounts"
    ],
    duration: "Use for a few weeks, then take a short break before continuing",
    benefits: "Improves overall strength and reduces fatigue"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds in dry soil during spring.",
        spacing: "2 feet apart",
      },
      watering: "Water lightly; avoid overwatering.",
      fertilization: "Minimal fertilization required.",
      pruning: "Remove dried leaves regularly.",
      pestsAndDiseases: "Generally pest-resistant.",
    },
  },

  {
    name: "Giloy",
    botanicalName: "Tinospora cordifolia",
    commonNames: ["Giloy", "Guduchi", "Amrita"],
    category: ["Climbers", "Immunity Boosting", "Antimicrobial"],
    imageUrl:
      "https://plantsguru.com/cdn/shop/files/giloy-plant.jpg?v=1739860580&width=416",
    modelUrl: "/models/giloy.glb",
    habitat: {
      nativeRegion: "India and tropical regions",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Partial sunlight",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      { use: "Immunity Booster", description: "Enhances body immunity" },
      {
        use: "Fever Treatment",
        description: "Used in dengue and viral fever management",
      },
      {
        use: "Detoxification",
        description: "Cleanses blood and removes toxins",
      },
    ],
    practicalUses: [
  {
    method: "Giloy Juice",
    steps: [
      "Take fresh giloy stem and wash it properly",
      "Cut it into small pieces",
      "Blend it with a little water to extract juice",
      "Strain the juice to remove solid parts",
      "Measure about 20 ml of the juice",
      "Drink it fresh in the morning on an empty stomach"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Boosts immunity and helps fight infections"
  },

  {
    method: "Giloy Kadha",
    steps: [
      "Take giloy stem, tulsi leaves, and a small piece of ginger",
      "Wash all ingredients properly",
      "Add them to a pan with 1-2 cups of water",
      "Boil for 10-15 minutes until the water reduces",
      "Strain the liquid",
      "Drink it warm"
    ],
    duration: "Drink once daily for 5-7 days during fever or infection",
    benefits: "Helps in fever and viral infections"
  },

  {
    method: "Giloy Powder",
    steps: [
      "Take 1/2 teaspoon of giloy powder",
      "Add it to a glass of warm water",
      "Mix well",
      "Drink it preferably on an empty stomach"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Detoxifies the body and improves digestion"
  },

  {
    method: "Daily Use",
    steps: [
      "Choose any form of giloy (juice, kadha, or powder)",
      "Use a small and safe quantity",
      "Consume it regularly as part of your routine",
      "Avoid excessive intake"
    ],
    duration: "Use for a few weeks, then take a short break",
    benefits: "Improves overall immunity"
  }
],
    methodsOfCultivation: {
      propagation: "Stem cuttings",
      planting: {
        instructions: "Plant stem cuttings near support.",
        spacing: "3 feet apart",
      },
      watering: "Moderate watering required.",
      fertilization: "Organic compost recommended.",
      pruning: "Regular trimming required.",
      pestsAndDiseases: "Resistant to most pests.",
    },
  },

  {
    name: "Brahmi",
    botanicalName: "Bacopa monnieri",
    commonNames: ["Brahmi"],
    category: ["Herbs", "Mental Health", "Cognitive Functions"],
    imageUrl:
      "https://m.media-amazon.com/images/I/61xJ0pyuyQL._AC_UF1000,1000_QL80_.jpg",
    modelUrl: "/models/brahmi.glb",
    habitat: {
      nativeRegion: "India, wetlands",
      growingConditions: {
        soil: "Moist, marshy soil",
        sunlight: "Partial sunlight",
        water: "High water requirement",
      },
    },
    medicinalUses: [
      {
        use: "Memory Enhancement",
        description: "Improves memory and concentration",
      },
      {
        use: "Anxiety Reduction",
        description: "Helps reduce anxiety and stress",
      },
    ],
    practicalUses: [
  {
    method: "Brahmi Juice",
    steps: [
      "Take fresh brahmi leaves and wash them properly",
      "Grind or crush them to extract the juice",
      "Strain the juice to remove solid particles",
      "Measure 1-2 teaspoons of the juice",
      "Drink it on an empty stomach in the morning"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Improves memory, concentration, and overall brain function"
  },

  {
    method: "Brahmi Tea",
    steps: [
      "Take a handful of fresh or 1 teaspoon dried brahmi leaves",
      "Boil 1 cup of water",
      "Add the brahmi leaves to the water",
      "Let it boil for 5-7 minutes",
      "Strain and drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Reduces anxiety and stress, and promotes mental calmness"
  },

  {
    method: "Brahmi Oil Massage",
    steps: [
      "Take a small amount of brahmi oil",
      "Apply it gently to your scalp",
      "Massage in circular motions for 5-10 minutes",
      "Leave it for at least 30 minutes or overnight",
      "Wash with mild shampoo"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Enhances hair growth and helps reduce stress"
  },

  {
    method: "Brahmi Powder",
    steps: [
      "Take 1/2 teaspoon of brahmi powder",
      "Add it to a glass of warm water or milk",
      "Mix well",
      "Drink it preferably in the morning"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Boosts cognitive performance and supports nervous system health"
  }
],
    methodsOfCultivation: {
      propagation: "Cuttings",
      planting: {
        instructions: "Plant in moist soil.",
        spacing: "6 inches apart",
      },
      watering: "Keep soil consistently moist.",
      fertilization: "Use organic fertilizer.",
      pruning: "Trim regularly to promote growth.",
      pestsAndDiseases: "Generally pest-resistant.",
    },
  },

  {
    name: "Shatavari",
    botanicalName: "Asparagus racemosus",
    commonNames: ["Shatavari"],
    category: ["Herbs", "Hormonal Health", "Women's Health"],
    imageUrl:
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-wild-asparagus-shatavari-plant-191924.jpg?v=1679751809",
    modelUrl: "/models/shatavari.glb",
    habitat: {
      nativeRegion: "India",
      growingConditions: {
        soil: "Sandy, well-drained soil",
        sunlight: "Partial shade",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      { use: "Women's Health", description: "Supports reproductive health" },
      { use: "Hormonal Balance", description: "Regulates hormones naturally" },
    ],
    practicalUses: [
  {
    method: "Shatavari Milk",
    steps: [
      "Take 1 cup of milk and heat it",
      "Add 1 teaspoon of shatavari powder",
      "Mix well until fully blended",
      "Let it cool slightly",
      "Drink it warm"
    ],
    duration: "Drink once daily for 2-3 weeks",
    benefits: "Supports hormonal balance and reproductive health"
  },

  {
    method: "Shatavari Powder",
    steps: [
      "Take 1/2 to 1 teaspoon of shatavari powder",
      "Add it to 1 teaspoon of honey",
      "Mix well",
      "Consume it directly"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Boosts immunity and increases energy levels"
  },

  {
    method: "Digestive Use",
    steps: [
      "Take a small amount (about 1/2 teaspoon) of shatavari powder",
      "Consume it after meals with water",
      "Use regularly in small quantities",
      "Avoid taking too much"
    ],
    duration: "Use once daily after meals for 2-3 weeks",
    benefits: "Improves digestion and helps reduce acidity"
  },

  {
    method: "General Tonic",
    steps: [
      "Prepare a drink using shatavari powder with milk or water",
      "Use a small and controlled amount",
      "Mix well before drinking",
      "Consume regularly as part of your routine"
    ],
    duration: "Use for a few weeks, then take a short break",
    benefits: "Promotes overall wellness and vitality"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Plant in sandy soil.",
        spacing: "2-3 feet apart",
      },
      watering: "Moderate watering needed.",
      fertilization: "Organic compost recommended.",
      pruning: "Remove dried stems.",
      pestsAndDiseases: "Generally resistant.",
    },
  },

  {
    name: "Amla",
    botanicalName: "Phyllanthus emblica",
    commonNames: ["Indian Gooseberry", "Amla"],
    category: ["Trees", "Immunity Boosting", "Digestive Health"],
    imageUrl:
      "https://plantsguru.com/cdn/shop/files/amla-plant-Indian_Gooseberry.png?v=1738347099",
    modelUrl: "/models/amla.glb",
    habitat: {
      nativeRegion: "India",
      growingConditions: {
        soil: "Light, well-drained soil",
        sunlight: "Full sun",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      { use: "Vitamin C Source", description: "Rich in Vitamin C" },
      { use: "Digestive Health", description: "Improves digestion" },
      { use: "Hair Health", description: "Promotes hair growth" },
    ],
    practicalUses: [
  {
    method: "Amla Juice",
    steps: [
      "Take 2-3 fresh amla fruits and wash them properly",
      "Cut them into small pieces and remove seeds",
      "Blend the pieces with a little water",
      "Strain the juice to remove pulp",
      "Dilute it with water if needed",
      "Drink it fresh in the morning on an empty stomach"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Boosts immunity and provides high vitamin C"
  },

  {
    method: "Raw Amla",
    steps: [
      "Take 1-2 fresh amla fruits",
      "Wash them properly",
      "Cut into small slices and remove seeds",
      "Eat directly or add a pinch of salt for taste"
    ],
    duration: "Eat daily for 2-3 weeks",
    benefits: "Improves digestion and metabolism"
  },

  {
    method: "Amla Hair Oil",
    steps: [
      "Take a small amount of amla hair oil",
      "Apply it evenly on your scalp",
      "Massage gently in circular motions for 5-10 minutes",
      "Leave it for at least 30 minutes or overnight",
      "Wash with mild shampoo"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Promotes hair growth and helps prevent hair fall"
  },

  {
    method: "Amla Candy",
    steps: [
      "Take dried amla candy pieces",
      "Consume a small portion (2-3 pieces)",
      "Chew properly before swallowing",
      "Use as a healthy snack"
    ],
    duration: "Use once daily for a few weeks",
    benefits: "Improves digestion and acts as an antioxidant"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or grafting",
      planting: {
        instructions: "Plant saplings in sunny area.",
        spacing: "10-15 feet apart",
      },
      watering: "Regular watering initially.",
      fertilization: "Organic manure recommended.",
      pruning: "Prune annually.",
      pestsAndDiseases: "Resistant to most pests.",
    },
  },
  {
    name: "Cardamom",
    botanicalName: "Elettaria cardamomum",
    commonNames: ["Elaichi"],
    category: ["Herbs", "Digestive Health"],
    imageUrl:
      "https://5.imimg.com/data5/ANDROID/Default/2025/4/504733546/ZW/QY/PJ/129176511/product-jpeg.jpg",
    modelUrl: "/models/cardamom.glb",
    habitat: {
      nativeRegion: "India",
      growingConditions: { soil: "Rich", sunlight: "Shade", water: "High" },
    },
    medicinalUses: [{ use: "Digestion", description: "Improves digestion" }],
    practicalUses: [
  {
    method: "Cardamom Tea",
    steps: [
      "Take 2-3 cardamom pods",
      "Crush them slightly to release flavor",
      "Boil water and tea leaves in a pan",
      "Add the crushed cardamom while boiling",
      "Let it boil for a few minutes",
      "Strain and drink it warm"
    ],
    duration: "Drink 1-2 times daily for a few weeks",
    benefits: "Improves digestion and freshens breath"
  },

  {
    method: "Mouth Freshener",
    steps: [
      "Take 1-2 cardamom pods",
      "Chew them slowly after meals",
      "Swallow or discard the husk after chewing"
    ],
    duration: "Use after meals daily",
    benefits: "Reduces bad breath and aids digestion"
  },

  {
    method: "Milk Flavoring",
    steps: [
      "Take 1 cup of milk and heat it",
      "Crush 1-2 cardamom pods",
      "Add them to the warm milk",
      "Mix well and let it infuse for a few minutes",
      "Drink it warm"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Soothes the stomach and improves metabolism"
  },

  {
    method: "Digestive Powder",
    steps: [
      "Take cardamom seeds and fennel seeds",
      "Grind them into a fine powder",
      "Store in an airtight container",
      "Take a small amount after meals"
    ],
    duration: "Use once daily after meals for 2-3 weeks",
    benefits: "Relieves bloating and acidity"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Shade area", spacing: "2 ft" },
      watering: "High",
      fertilization: "Organic",
      pruning: "Low",
      pestsAndDiseases: "Fungal issues",
    },
  },

  {
    name: "Clove",
    botanicalName: "Syzygium aromaticum",
    commonNames: ["Laung"],
    category: ["Trees", "Antimicrobial"],
    imageUrl: "https://gujaratnursery.in/supadmin/img/Clove.webp",
    modelUrl: "/models/clove.glb",
    habitat: {
      nativeRegion: "India",
      growingConditions: {
        soil: "Rich",
        sunlight: "Partial",
        water: "Moderate",
      },
    },
    medicinalUses: [{ use: "Toothache", description: "Relieves dental pain" }],
   practicalUses: [
  {
    method: "Clove Oil for Toothache",
    steps: [
      "Take a small amount of clove oil",
      "Dip a clean cotton ball or earbud in the oil",
      "Gently apply it to the affected tooth or gum area",
      "Leave it for a few minutes",
      "Avoid swallowing the oil"
    ],
    duration: "Use 1-2 times daily until pain reduces",
    benefits: "Provides quick relief from dental pain"
  },

  {
    method: "Clove Tea",
    steps: [
      "Take 3-4 cloves",
      "Boil 1 cup of water in a pan",
      "Add the cloves to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain and drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Improves digestion and boosts immunity"
  },

  {
    method: "Chewing Clove",
    steps: [
      "Take 1 whole clove",
      "Chew it slowly in your mouth",
      "Let the juices release naturally",
      "Swallow or discard after chewing"
    ],
    duration: "Use once daily or after meals",
    benefits: "Freshens breath and reduces oral bacteria"
  },

  {
    method: "Cooking Use",
    steps: [
      "Take a few cloves",
      "Add them while cooking rice, curry, or other dishes",
      "Let them cook properly with food",
      "Consume as part of your meal"
    ],
    duration: "Use regularly in cooking",
    benefits: "Enhances flavor and improves digestion"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Plant saplings", spacing: "15 ft" },
      watering: "Moderate",
      fertilization: "Organic",
      pruning: "Low",
      pestsAndDiseases: "Sensitive",
    },
  },
  {
  name: "Bael", botanicalName: "Aegle marmelos",
  commonNames: ["Bael"], category: ["Trees", "Digestive Health"],
  imageUrl: "https://images.squarespace-cdn.com/content/v1/5a5f182cbe42d619379891ca/1523645541142-K664FK8P79NF4DW3IOUG/wood-apple.jpg", modelUrl: "/models/bael.glb",
  habitat: { nativeRegion: "India", growingConditions: { soil: "Dry", sunlight: "Full", water: "Low" } },
  medicinalUses: [{ use: "Digestion", description: "Treats stomach issues" }],
  practicalUses: [
  {
    method: "Bael Juice",
    steps: [
      "Take a ripe bael fruit and break it open",
      "Scoop out the pulp using a spoon",
      "Add the pulp to a bowl with water",
      "Mash and mix it well to extract juice",
      "Strain the mixture to remove fibers and seeds",
      "Drink it fresh"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Treats diarrhea and improves digestion"
  },

  {
    method: "Bael Sharbat",
    steps: [
      "Take bael pulp and add it to a bowl",
      "Mix it with cold water",
      "Add a little sugar or jaggery for taste (optional)",
      "Stir well until smooth",
      "Strain if needed",
      "Serve chilled"
    ],
    duration: "Drink once daily during summer or for 1-2 weeks",
    benefits: "Cools the body and supports gut health"
  },

  {
    method: "Dry Powder",
    steps: [
      "Take 1/2 teaspoon of bael powder",
      "Add it to a glass of warm water",
      "Mix well",
      "Drink it after meals"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Helps in chronic digestive issues"
  },

  {
    method: "Daily Consumption",
    steps: [
      "Take fresh bael fruit when in season",
      "Wash and break it open",
      "Eat the pulp directly or mix with water",
      "Consume in moderate quantity"
    ],
    duration: "Eat regularly during its season",
    benefits: "Improves overall digestive system"
  }
],
  methodsOfCultivation: { propagation: "Seeds", planting: { instructions: "Direct", spacing: "10 ft" }, watering: "Low", fertilization: "Minimal", pruning: "Low", pestsAndDiseases: "Resistant" }
},
{
  name: "Gudmar", botanicalName: "Gymnema sylvestre",
  commonNames: ["Gudmar"], category: ["Climbers", "Diabetes"],
  imageUrl: "https://lalitenterprise.com/cdn/shop/files/Gurmar_Plant.webp?v=1764587136", modelUrl: "/models/gudmar.glb",
  habitat: { nativeRegion: "India", growingConditions: { soil: "Forest", sunlight: "Partial", water: "Moderate" } },
  medicinalUses: [{ use: "Diabetes", description: "Reduces sugar absorption" }],
 practicalUses: [
  {
    method: "Gudmar Powder",
    steps: [
      "Take 1/2 teaspoon of gudmar powder",
      "Add it to a glass of warm water",
      "Mix well until fully dissolved",
      "Drink it preferably on an empty stomach"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Helps control blood sugar levels"
  },

  {
    method: "Leaf Chewing",
    steps: [
      "Take 1-2 fresh gudmar leaves",
      "Wash them properly",
      "Chew them slowly",
      "Swallow after chewing"
    ],
    duration: "Use once daily for a few weeks",
    benefits: "Reduces sugar cravings"
  },

  {
    method: "Herbal Tea",
    steps: [
      "Take a few gudmar leaves",
      "Boil 1 cup of water in a pan",
      "Add the leaves to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain and drink it warm"
    ],
    duration: "Drink once daily for 2-3 weeks",
    benefits: "Supports diabetes management"
  },

  {
    method: "Regular Intake",
    steps: [
      "Choose any form of gudmar (powder, leaves, or tea)",
      "Use a small and controlled amount",
      "Consume it regularly as part of your routine",
      "Avoid excessive intake"
    ],
    duration: "Use for a few weeks, then take a short break",
    benefits: "Improves glucose metabolism"
  }
],
  methodsOfCultivation: { propagation: "Cuttings", planting: { instructions: "Support needed", spacing: "3 ft" }, watering: "Moderate", fertilization: "Organic", pruning: "Regular", pestsAndDiseases: "Resistant" }
},
  {
    name: "Chilli Pepper",
    botanicalName: "Capsicum annuum",
    commonNames: ["Chili", "Capsicum"],
    category: ["Herbs", "Edible Plant"],
    imageUrl:
      "https://www.shutterstock.com/image-photo/red-hot-chilli-pepper-flower-600nw-1849044037.jpg",
    modelUrl: "/models/chilli-pepper.glb",
    habitat: {
      nativeRegion: "Central and South America",
      growingConditions: {
        soil: "Well-drained, fertile soil",
        sunlight: "Full sun",
        water: "Regular watering, but avoid waterlogging",
      },
    },
    medicinalUses: [
      {
        use: "Pain Relief",
        description: "Capsaicin is used in topical pain relief treatments",
      },
      {
        use: "Metabolism Booster",
        description: "Increases metabolic rate and fat burning",
      },
    ],
    practicalUses: [
  {
    method: "Cooking Use",
    steps: [
      "Take fresh or dried chilli",
      "Wash (if fresh) and chop it",
      "Add it while cooking vegetables, curry, or other dishes",
      "Cook it properly with the food",
      "Consume as part of your meal"
    ],
    duration: "Use regularly in daily meals",
    benefits: "Boosts metabolism and improves digestion"
  },

  {
    method: "Pain Relief Cream",
    steps: [
      "Take a capsaicin-based cream (made from chilli extract)",
      "Apply a small amount to the affected muscle or joint area",
      "Massage gently until absorbed",
      "Wash hands after application"
    ],
    duration: "Use 1-2 times daily for a few weeks",
    benefits: "Helps reduce muscle and joint pain"
  },

  {
    method: "Chilli Water Drink",
    steps: [
      "Take 1 glass of warm water",
      "Add a very small pinch of chilli powder",
      "Mix well",
      "Drink carefully"
    ],
    duration: "Use once daily for a few days only",
    benefits: "Enhances metabolism and supports fat burning"
  },

  {
    method: "Circulation Boost",
    steps: [
      "Include small amounts of chilli in your daily diet",
      "Add it to meals like salads, curries, or snacks",
      "Consume in moderate quantity regularly",
      "Avoid excessive intake"
    ],
    duration: "Use regularly as part of your diet",
    benefits: "Improves blood circulation and supports heart health"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds indoors and transplant after the last frost.",
        spacing: "18-24 inches apart",
      },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Use balanced fertilizer during growing season.",
      pruning: "Prune to encourage bushier growth.",
      pestsAndDiseases: "Watch for aphids and fungal diseases.",
    },
  },

  {
    name: "Chamomile",
    botanicalName: "Matricaria chamomilla",
    commonNames: ["German Chamomile", "Wild Chamomile"],
    category: [
      "Herbs",
      "Skincare",
      "Digestive Health",
      "Edible Plant",
      "Hormonal Health",
      "Mental Health",

      "Pain Relief",
    ],
    imageUrl:
      "https://www.ozbreed.com.au/wp-content/uploads/2025/01/Calm-O-Mile-Chamomile-plant-in-bloom-1024x683.jpg",
    modelUrl: "/models/chamomile.glb",
    habitat: {
      nativeRegion: "Europe and Western Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sunlight",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      { use: "Calming", description: "Promotes relaxation and aids sleep" },
      { use: "Digestive Aid", description: "Soothes the digestive system" },
    ],
    practicalUses: [
  {
    method: "Chamomile Tea",
    steps: [
      "Take 1 teaspoon of dried chamomile flowers",
      "Boil 1 cup of water",
      "Pour the hot water over the flowers",
      "Let it steep for 5-10 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily, preferably before bedtime, for 1-2 weeks",
    benefits: "Promotes sleep and relaxation"
  },

  {
    method: "Skin Soothing",
    steps: [
      "Prepare chamomile tea and let it cool completely",
      "Dip a clean cotton pad in the tea",
      "Apply gently on the affected skin area",
      "Leave it for 10-15 minutes",
      "Rinse lightly if needed"
    ],
    duration: "Use once daily for a few days or until irritation reduces",
    benefits: "Reduces skin irritation and soothes the skin"
  },

  {
    method: "Hair Rinse",
    steps: [
      "Prepare chamomile tea and let it cool",
      "Wash your hair with shampoo",
      "Pour the chamomile tea over your hair as a final rinse",
      "Do not rinse again with water",
      "Let your hair dry naturally"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Adds natural shine to hair"
  },

  {
    method: "Stress Relief",
    steps: [
      "Prepare chamomile tea as described above",
      "Drink it slowly in a calm environment",
      "Consume before bedtime"
    ],
    duration: "Use daily for 1-2 weeks",
    benefits: "Helps reduce stress and anxiety"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds directly in the ground.",
        spacing: "12 inches apart",
      },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Use light fertilizer if needed.",
      pruning: "Deadhead flowers to encourage more blooms.",
      pestsAndDiseases: "Resistant to most pests.",
    },
  },

  {
    name: "Hibiscus",
    botanicalName: "Hibiscus rosa-sinensis",
    commonNames: ["Hibiscus"],
    category: [
      "Herbs",
      "Skincare",
      "Hormonal Health",
      "Immunity Boosting",
      "Edible Plant",
    ],
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/5/UQ/VC/QH/136079621/red-hibiscus-plant-my-garden-red-hibiscus-plant-199424491.jpg",
    modelUrl: "/models/hibiscus.glb",
    habitat: {
      nativeRegion: "Tropical regions",
      growingConditions: {
        soil: "Well-drained soil, rich in organic matter",
        sunlight: "Full sun to partial shade",
        water: "Regular watering, especially during dry conditions",
      },
    },
    medicinalUses: [
      { use: "Blood Pressure", description: "May help lower blood pressure" },
      {
        use: "Antioxidant",
        description: "Rich in antioxidants that promote overall health",
      },
    ],
    practicalUses: [
  {
    method: "Hibiscus Tea",
    steps: [
      "Take 1-2 teaspoons of dried hibiscus petals",
      "Boil 1 cup of water in a pan",
      "Add the petals to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Helps lower blood pressure"
  },

  {
    method: "Hair Mask",
    steps: [
      "Take fresh hibiscus leaves and wash them properly",
      "Grind them into a smooth paste",
      "Apply the paste evenly on your scalp and hair",
      "Leave it for 20-30 minutes",
      "Wash with mild shampoo"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Promotes hair growth and strengthens hair"
  },

  {
    method: "Skin Pack",
    steps: [
      "Take hibiscus petals or leaves and grind into a paste",
      "Add a little water or honey if needed",
      "Apply on a clean face",
      "Leave it for 15-20 minutes",
      "Wash off with normal water"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Improves skin glow and texture"
  },

  {
    method: "Hibiscus Juice",
    steps: [
      "Take fresh hibiscus petals and wash them properly",
      "Boil them in water for a few minutes",
      "Let it cool slightly",
      "Strain the liquid",
      "Drink it fresh"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Boosts immunity"
  }
],
    methodsOfCultivation: {
      propagation: "Cuttings",
      planting: {
        instructions: "Plant cuttings in well-drained soil.",
        spacing: "6-8 feet apart",
      },
      watering: "Water regularly, avoid waterlogging.",
      fertilization: "Apply balanced fertilizer during growing season.",
      pruning: "Prune regularly to maintain shape and encourage blooms.",
      pestsAndDiseases: "Watch for aphids, mealybugs, and leaf spots.",
    },
  },

  {
    name: "Lavender",
    botanicalName: "Lavandula angustifolia",
    commonNames: ["English Lavender"],
    category: [
      "Shrubs",
      "Skincare",
      "Hormonal Health",
      "Mental Health",

      "Pain Relief",

      "Antimicrobial",
    ],
    imageUrl:
      "https://media.istockphoto.com/id/118312085/photo/lavender-herb-plant.jpg?s=612x612&w=0&k=20&c=10_QhBhDJbjvk7ULX5qDb3oxsqBHVOW1bs6mCEIw5Hs=",
    modelUrl: "/models/lavender.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Well-drained, sandy or rocky soil",
        sunlight: "Full sunlight",
        water: "Low water needs, drought-tolerant",
      },
    },
    medicinalUses: [
      { use: "Calming", description: "Used to reduce stress and anxiety" },
      { use: "Skin Health", description: "Helps soothe skin irritations" },
    ],
    practicalUses: [
  {
    method: "Lavender Oil",
    steps: [
      "Take a few drops of lavender essential oil",
      "Dilute it with a carrier oil (like coconut or almond oil)",
      "Apply gently on your temples or wrists",
      "You can also use it in a diffuser",
      "Relax and inhale the aroma"
    ],
    duration: "Use once daily or when needed for relaxation",
    benefits: "Helps reduce stress and anxiety"
  },

  {
    method: "Sleep Aid",
    steps: [
      "Take 1-2 drops of lavender oil",
      "Place it on a cotton ball or cloth",
      "Keep it near your pillow before sleeping",
      "Inhale the gentle fragrance while resting"
    ],
    duration: "Use daily at bedtime",
    benefits: "Improves sleep quality"
  },

  {
    method: "Skin Use",
    steps: [
      "Take a few drops of lavender oil",
      "Dilute it with a carrier oil",
      "Apply gently on the affected skin area",
      "Leave it to absorb naturally"
    ],
    duration: "Use once daily for a few days",
    benefits: "Soothes skin irritation"
  },

  {
    method: "Bath Use",
    steps: [
      "Fill your bathtub with warm water",
      "Add 4-5 drops of lavender oil",
      "Mix the water gently",
      "Soak your body in the bath for 15-20 minutes",
      "Relax and rinse lightly if needed"
    ],
    duration: "Use 2-3 times a week",
    benefits: "Relaxes the body and mind"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Plant in well-drained soil.",
        spacing: "18-24 inches apart",
      },
      watering: "Water sparingly, let soil dry between watering.",
      fertilization: "Light fertilization during growing season.",
      pruning: "Prune after flowering to encourage new growth.",
      pestsAndDiseases:
        "Resistant to most pests, but root rot can occur in wet soil.",
    },
  },

  {
    name: "Nettle",
    botanicalName: "Urtica dioica",
    commonNames: ["Stinging Nettle"],
    category: ["Shrubs", "Immunity Boosting", "Edible Plant", "Pain Relief"],
    imageUrl:
      "https://img.freepik.com/premium-photo/young-nettle-leaves-pot-rustic-background-stinging-nettles-urtica_629685-9056.jpg",
    modelUrl: "/models/nettle.glb",
    habitat: {
      nativeRegion: "Europe, Asia, and North America",
      growingConditions: {
        soil: "Moist, fertile soil",
        sunlight: "Partial shade",
        water: "Regular watering",
      },
    },
    medicinalUses: [
      {
        use: "Anti-inflammatory",
        description: "Helps reduce inflammation and joint pain",
      },
      { use: "Allergy Relief", description: "May ease symptoms of hay fever" },
    ],
    practicalUses: [
  {
    method: "Nettle Tea",
    steps: [
      "Take fresh or dried nettle leaves (use gloves if fresh)",
      "Boil 1 cup of water in a pan",
      "Add the nettle leaves to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Reduces inflammation and supports immunity"
  },

  {
    method: "Nettle Soup",
    steps: [
      "Take fresh nettle leaves and wash them properly (use gloves)",
      "Chop the leaves",
      "Cook them in water or broth with spices and vegetables",
      "Boil for 15-20 minutes until soft",
      "Serve and eat warm"
    ],
    duration: "Consume 2-3 times a week for a few weeks",
    benefits: "Rich in nutrients and improves overall health"
  },

  {
    method: "Hair Rinse",
    steps: [
      "Boil nettle leaves in water for 10 minutes",
      "Let the water cool completely",
      "Strain the liquid",
      "Wash your hair with shampoo",
      "Use the nettle water as a final rinse",
      "Do not rinse again with plain water"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Strengthens hair and helps reduce hair fall"
  },

  {
    method: "Allergy Relief",
    steps: [
      "Prepare nettle tea as described above",
      "Drink it regularly in small amounts",
      "Use especially during allergy season"
    ],
    duration: "Drink daily for a few weeks during allergy season",
    benefits: "Helps reduce seasonal allergies"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or root divisions",
      planting: {
        instructions: "Plant in moist, fertile soil.",
        spacing: "12-18 inches apart",
      },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply compost or organic fertilizer.",
      pruning: "Harvest leaves regularly for best growth.",
      pestsAndDiseases: "Generally pest-resistant.",
    },
  },

  {
    name: "Flax",
    botanicalName: "Linum usitatissimum",
    commonNames: ["Flax", "Linseed"],
    category: ["Herbs", "Digestive Health", "Edible Plant", "Hormonal Health"],
    imageUrl:
      "https://img.freepik.com/premium-photo/photo-flax-flower-pot-isolated-white-background_847439-98635.jpg",
    modelUrl: "/models/flax.glb",
    habitat: {
      nativeRegion: "Western Asia and Mediterranean",
      growingConditions: {
        soil: "Well-drained, fertile soil",
        sunlight: "Full sunlight",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      {
        use: "Heart Health",
        description:
          "Rich in omega-3 fatty acids, supports cardiovascular health",
      },
      {
        use: "Digestive Health",
        description: "Promotes digestive health due to high fiber content",
      },
    ],
    practicalUses: [
  {
    method: "Flaxseed Water",
    steps: [
      "Take 1 teaspoon of flaxseeds",
      "Add them to a glass of water",
      "Soak them overnight",
      "In the morning, stir the water well",
      "Drink the water (you can also chew the seeds)"
    ],
    duration: "Use once daily in the morning for 2-3 weeks",
    benefits: "Improves digestion and supports gut health"
  },

  {
    method: "Flax Powder",
    steps: [
      "Take flaxseeds and grind them into a fine powder",
      "Add 1 teaspoon of the powder to smoothies, yogurt, or meals",
      "Mix well before consuming",
      "Consume fresh (do not store for too long after grinding)"
    ],
    duration: "Use once daily as part of your diet",
    benefits: "Supports heart health and provides omega-3 fatty acids"
  },

  {
    method: "Hair Mask",
    steps: [
      "Boil flaxseeds in water until it forms a gel-like consistency",
      "Strain the gel and let it cool",
      "Apply the gel evenly on your hair and scalp",
      "Leave it for 20-30 minutes",
      "Wash with mild shampoo"
    ],
    duration: "Use 2-3 times a week for 3-4 weeks",
    benefits: "Improves hair strength and adds natural shine"
  },

  {
    method: "Weight Management",
    steps: [
      "Take 1 teaspoon of flaxseeds or flaxseed powder",
      "Add it to your meals or water",
      "Consume regularly in small amounts",
      "Maintain a balanced diet along with it"
    ],
    duration: "Use daily for a few weeks",
    benefits: "Helps in weight control and increases satiety"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds directly in soil.",
        spacing: "4-6 inches apart",
      },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply organic fertilizer during growing season.",
      pruning: "Harvest when seed pods turn brown.",
      pestsAndDiseases: "Generally pest-resistant.",
    },
  },

  {
    name: "Artichoke",
    botanicalName: "Cynara scolymus",
    commonNames: ["Artichoke"],
    category: ["Herbs", "Digestive Health", "Edible Plant"],
    imageUrl:
      "https://img.freepik.com/premium-photo/artichoke-plant-pot-white-background_145644-23851.jpg",
    modelUrl: "/models/artichoke.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Rich, well-drained soil",
        sunlight: "Full sunlight",
        water: "Regular watering",
      },
    },
    medicinalUses: [
      {
        use: "Liver Health",
        description: "Supports liver function and digestion",
      },
      {
        use: "Antioxidant",
        description: "Rich in antioxidants that promote overall health",
      },
    ],
    practicalUses: [
  {
    method: "Artichoke Tea",
    steps: [
      "Take dried or fresh artichoke leaves",
      "Boil 1 cup of water in a pan",
      "Add the leaves to the boiling water",
      "Let it boil for 5-10 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Supports liver health and helps in detoxification"
  },

  {
    method: "Cooking Use",
    steps: [
      "Take fresh artichoke and wash it properly",
      "Cut and clean the edible parts",
      "Cook it with vegetables, curry, or steam it",
      "Season as per taste",
      "Consume as part of your meal"
    ],
    duration: "Use 2-3 times a week in meals",
    benefits: "Improves digestion and supports gut health"
  },

  {
    method: "Extract Use",
    steps: [
      "Consult a doctor before using artichoke extract",
      "Follow the dosage instructions on the supplement",
      "Take the extract with water after meals",
      "Do not exceed the recommended dose"
    ],
    duration: "Use as advised by a healthcare professional",
    benefits: "Helps reduce cholesterol levels"
  },

  {
    method: "Daily Diet",
    steps: [
      "Include artichoke in your regular meals",
      "Use it in salads, soups, or cooked dishes",
      "Consume in moderate quantity regularly",
      "Maintain a balanced diet along with it"
    ],
    duration: "Use regularly as part of a healthy diet",
    benefits: "Boosts overall metabolism"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or divisions",
      planting: {
        instructions: "Plant in rich, well-drained soil.",
        spacing: "3-4 feet apart",
      },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Fertilize with compost or organic fertilizer.",
      pruning: "Harvest buds before they open.",
      pestsAndDiseases: "Watch for aphids and caterpillars.",
    },
  },

  {
    name: "Beetroot",
    botanicalName: "Beta vulgaris",
    commonNames: ["Beet", "Beetroot"],
    category: ["Herbs", "Digestive Health", "Edible Plant"],
    imageUrl:
      "https://cdn.patchplants.com/uploads/3_2_How_to_care_for_beetroot_min_04b49f17b6.jpg",
    modelUrl: "/models/beetroot.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Loamy, well-drained soil",
        sunlight: "Full sun",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      {
        use: "Blood Health",
        description: "Rich in iron, supports blood production",
      },
      { use: "Heart Health", description: "May help lower blood pressure" },
    ],
    practicalUses: [
  {
    method: "Beetroot Juice",
    steps: [
      "Take 1 fresh beetroot and wash it properly",
      "Peel and cut it into small pieces",
      "Blend the pieces with a little water",
      "Strain the juice if needed",
      "Drink it fresh"
    ],
    duration: "Use once daily in the morning for 2-3 weeks",
    benefits: "Improves blood circulation"
  },

  {
    method: "Salad Use",
    steps: [
      "Take a fresh beetroot and wash it properly",
      "Peel and slice it into thin pieces",
      "Add it to your salad",
      "Mix with other vegetables if desired",
      "Consume fresh"
    ],
    duration: "Use daily or 3-4 times a week",
    benefits: "Boosts iron levels"
  },

  {
    method: "Face Pack",
    steps: [
      "Extract fresh beetroot juice",
      "Dip a cotton pad in the juice",
      "Apply gently on a clean face",
      "Leave it for 10-15 minutes",
      "Wash off with normal water"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Adds natural glow to the skin"
  },

  {
    method: "Cooked Vegetable",
    steps: [
      "Take fresh beetroot and wash it properly",
      "Peel and cut into pieces",
      "Cook it by boiling, steaming, or making curry",
      "Add spices as per taste",
      "Consume as part of your meal"
    ],
    duration: "Use regularly in meals",
    benefits: "Supports heart health"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds directly in the ground.",
        spacing: "12 inches apart",
      },
      watering: "Water regularly to keep soil moist.",
      fertilization: "Fertilize with organic compost during growing season.",
      pruning: "Harvest roots when they reach the desired size.",
      pestsAndDiseases: "Watch for leaf miners and fungal diseases.",
    },
  },

  {
    name: "Fennel",
    botanicalName: "Foeniculum vulgare",
    commonNames: ["Sweet Fennel", "Florence Fennel"],
    category: ["Herbs", "Digestive Health", "Edible Plant"],
    imageUrl:
      "https://img.freepik.com/premium-photo/fennel-plant-pot-isolated-white-background_1057-30275.jpg",
    modelUrl: "/models/fennel.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Well-drained, fertile soil",
        sunlight: "Full sun",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      {
        use: "Digestive Health",
        description: "Helps reduce bloating and digestive discomfort",
      },
      {
        use: "Respiratory Health",
        description: "Used to soothe coughs and bronchitis",
      },
    ],
    practicalUses: [
  {
    method: "Fennel Water",
    steps: [
      "Take 1 teaspoon of fennel seeds",
      "Boil 1 cup of water in a pan",
      "Add the fennel seeds to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain the water",
      "Drink it warm"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Reduces bloating and improves digestion"
  },

  {
    method: "Mouth Freshener",
    steps: [
      "Take 1/2 teaspoon of fennel seeds",
      "Chew them slowly after meals",
      "Swallow after chewing"
    ],
    duration: "Use after meals daily",
    benefits: "Freshens breath and aids digestion"
  },

  {
    method: "Fennel Tea",
    steps: [
      "Take 1 teaspoon of fennel seeds",
      "Crush them slightly",
      "Boil 1 cup of water",
      "Add the crushed seeds to the water",
      "Let it boil for 5-7 minutes",
      "Strain and drink warm"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Relieves gas and stomach discomfort"
  },

  {
    method: "Cooking Use",
    steps: [
      "Take fennel seeds",
      "Add them while cooking vegetables, curry, or other dishes",
      "Let them cook properly with food",
      "Consume as part of your meal"
    ],
    duration: "Use regularly in meals",
    benefits: "Enhances taste and supports digestive health"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds directly in the ground.",
        spacing: "12-18 inches apart",
      },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply balanced fertilizer during growing season.",
      pruning: "Harvest bulbs when they reach full size.",
      pestsAndDiseases: "Watch for aphids and caterpillars.",
    },
  },

  {
    name: "Cinnamon",
    botanicalName: "Cinnamomum verum",
    commonNames: ["True Cinnamon"],
    category: [
      "Herbs",
      "Digestive Health",
      "Edible Plant",
      "Pain Relief",

      "Antimicrobial",
    ],
    imageUrl:
      "https://www.rewilddc.com/cdn/shop/files/f6746c548544f74ec145172884276051_c562bb30-d334-42da-bf87-3cc6ca9ef5f6.jpg?v=1752867376&width=1333",
    modelUrl: "/models/cinnamon.glb",
    habitat: {
      nativeRegion: "Sri Lanka",
      growingConditions: {
        soil: "Well-drained, loamy soil",
        sunlight: "Partial to full sun",
        water: "Regular watering, avoid waterlogging",
      },
    },
    medicinalUses: [
      {
        use: "Blood Sugar Control",
        description: "Helps regulate blood sugar levels",
      },
      {
        use: "Antioxidant",
        description: "Rich in antioxidants that promote overall health",
      },
    ],
    practicalUses: [
  {
    method: "Cinnamon Tea",
    steps: [
      "Take 1 small cinnamon stick or 1/2 teaspoon cinnamon powder",
      "Boil 1 cup of water in a pan",
      "Add the cinnamon to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain if needed",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Helps regulate blood sugar levels"
  },

  {
    method: "Cinnamon Milk",
    steps: [
      "Take 1 cup of milk and heat it",
      "Add a small pinch of cinnamon powder",
      "Mix well",
      "Let it cool slightly",
      "Drink it warm"
    ],
    duration: "Use once daily for 1-2 weeks",
    benefits: "Improves metabolism and digestion"
  },

  {
    method: "Cinnamon Face Pack",
    steps: [
      "Take a small pinch of cinnamon powder",
      "Add 1 teaspoon of honey",
      "Mix well to form a paste",
      "Apply on a clean face (avoid sensitive areas)",
      "Leave it for 10-15 minutes",
      "Wash off with normal water"
    ],
    duration: "Use 1-2 times a week for 2-3 weeks",
    benefits: "Reduces acne and improves skin health"
  },

  {
    method: "Daily Use",
    steps: [
      "Take a small amount of cinnamon powder or stick",
      "Add it to tea, milk, or meals",
      "Consume in moderate quantity",
      "Avoid excessive intake"
    ],
    duration: "Use regularly as part of your diet",
    benefits: "Boosts immunity and provides antioxidants"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Plant in well-drained soil.",
        spacing: "12-15 feet apart",
      },
      watering: "Water regularly, but do not allow soil to stay waterlogged.",
      fertilization: "Fertilize with organic compost.",
      pruning: "Prune regularly to maintain tree shape.",
      pestsAndDiseases: "Resistant to most pests.",
    },
  },

  {
    name: "Dandelion",
    botanicalName: "Taraxacum officinale",
    commonNames: ["Dandelion"],
    category: ["Herbs", "Digestive Health", "Edible Plant", "Pain Relief"],
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/027/201/873/non_2x/of-dandelion-flower-in-pot-isolated-on-white-background-generative-ai-photo.jpg",
    modelUrl: "/models/dandelion.glb",
    habitat: {
      nativeRegion: "Europe, Asia, North America",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Full sun to partial shade",
        water: "Moderate watering",
      },
    },
    medicinalUses: [
      {
        use: "Detoxification",
        description: "Supports liver health and detoxification",
      },
      {
        use: "Digestive Aid",
        description: "Stimulates appetite and aids digestion",
      },
    ],
    practicalUses: [
  {
    method: "Dandelion Tea",
    steps: [
      "Take 1 teaspoon of dried dandelion roots or leaves",
      "Boil 1 cup of water in a pan",
      "Add the dandelion to the boiling water",
      "Let it boil for 5-10 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Supports liver detox and improves digestion"
  },

  {
    method: "Salad Use",
    steps: [
      "Take fresh dandelion leaves and wash them properly",
      "Chop the leaves into small pieces",
      "Add them to your salad",
      "Mix with other vegetables",
      "Consume fresh"
    ],
    duration: "Use 2-3 times a week",
    benefits: "Provides nutrients and supports digestion"
  },

  {
    method: "Juice",
    steps: [
      "Take fresh dandelion leaves or roots",
      "Wash them properly",
      "Blend them with a little water",
      "Strain the juice",
      "Drink a small amount"
    ],
    duration: "Use once daily for 1-2 weeks (in small quantities)",
    benefits: "Helps in detoxification"
  },

  {
    method: "Skin Use",
    steps: [
      "Extract juice or use dandelion extract",
      "Apply gently on acne-affected areas",
      "Leave it for 10-15 minutes",
      "Wash off with normal water"
    ],
    duration: "Use once daily for a few days",
    benefits: "Helps reduce acne"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: {
        instructions: "Sow seeds directly on soil surface.",
        spacing: "12 inches apart",
      },
      watering: "Water moderately, avoid waterlogging.",
      fertilization: "Apply organic fertilizer if needed.",
      pruning: "Harvest leaves before the plant flowers for best flavor.",
      pestsAndDiseases: "Generally pest-resistant.",
    },
  },

  {
    name: "Orange Tree",
    botanicalName: "Citrus sinensis",
    commonNames: ["Orange"],
    category: ["Trees", "Edible Plant"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/RQ5gPz6Z8zTCF4zA7Hjjd6.jpg",
    modelUrl: "/models/orange-tree.glb",
    habitat: {
      nativeRegion: "Southeast Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sun",
        water: "Regular watering, especially during fruiting",
      },
    },
    medicinalUses: [
      {
        use: "Vitamin C",
        description: "Rich source of vitamin C, supports immune system",
      },
      {
        use: "Skin Health",
        description: "Promotes healthy skin due to high antioxidant content",
      },
    ],
   practicalUses: [
  {
    method: "Orange Juice",
    steps: [
      "Take 2-3 fresh oranges and wash them",
      "Peel and separate the segments",
      "Blend or squeeze to extract juice",
      "Strain if needed",
      "Drink it fresh"
    ],
    duration: "Drink once daily in the morning for 2-3 weeks",
    benefits: "Boosts immunity and provides vitamin C"
  },

  {
    method: "Orange Peel Powder",
    steps: [
      "Collect orange peels and wash them properly",
      "Dry the peels in sunlight until completely dry",
      "Grind them into a fine powder",
      "Mix the powder with water, curd, or honey",
      "Apply on a clean face",
      "Leave for 10-15 minutes and wash off"
    ],
    duration: "Use 2-3 times a week for 2-3 weeks",
    benefits: "Improves skin glow and reduces pigmentation"
  },

  {
    method: "Skin Toner",
    steps: [
      "Take fresh orange juice",
      "Dilute it with equal amount of water",
      "Dip a cotton pad in the mixture",
      "Apply gently on your face",
      "Leave for 5-10 minutes and rinse"
    ],
    duration: "Use once daily for a few days",
    benefits: "Tightens pores and refreshes skin"
  },

  {
    method: "Diet Use",
    steps: [
      "Take 1-2 fresh oranges",
      "Wash and peel them",
      "Eat the fruit directly",
      "Include regularly in your diet"
    ],
    duration: "Use daily as part of your diet",
    benefits: "Supports digestion and keeps the body hydrated"
  }
],
    methodsOfCultivation: {
      propagation: "Grafting or seeds",
      planting: {
        instructions: "Plant in well-drained soil.",
        spacing: "15-20 feet apart",
      },
      watering: "Water regularly, especially in hot conditions.",
      fertilization: "Apply citrus fertilizer during growing season.",
      pruning: "Prune to maintain size and shape.",
      pestsAndDiseases: "Watch for citrus greening, aphids, and spider mites.",
    },
  },

  {
    name: "Lemon Tree",
    botanicalName: "Citrus limon",
    commonNames: ["Lemon"],
    category: ["Trees", "Edible Plant"],
    imageUrl:
      "https://m.media-amazon.com/images/I/61xwAHVYZvL._AC_UF1000,1000_QL80_.jpg",
    modelUrl: "/models/lemon-tree.glb",
    habitat: {
      nativeRegion: "South Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sun",
        water: "Regular watering, avoid waterlogging",
      },
    },
    medicinalUses: [
      {
        use: "Immune Support",
        description: "Rich in vitamin C, boosts immune function",
      },
      {
        use: "Detoxification",
        description: "Promotes detoxification and liver health",
      },
    ],
    practicalUses: [
  {
    method: "Lemon Water",
    steps: [
      "Take 1 glass of warm water",
      "Cut a fresh lemon and squeeze half of it into the water",
      "Mix well",
      "Drink it on an empty stomach in the morning"
    ],
    duration: "Use once daily for 2-3 weeks",
    benefits: "Detoxifies the body and aids digestion"
  },

  {
    method: "Skin Application",
    steps: [
      "Take fresh lemon juice",
      "Dilute it with equal amount of water",
      "Dip a cotton pad in the mixture",
      "Apply gently on the affected skin area",
      "Leave it for 5-10 minutes",
      "Wash off with normal water"
    ],
    duration: "Use once daily for a few days",
    benefits: "Helps reduce dark spots"
  },

  {
    method: "Hair Rinse",
    steps: [
      "Take fresh lemon juice",
      "Mix it with a bowl of water",
      "Wash your hair with shampoo",
      "Use this mixture as a final rinse",
      "Leave it for a few minutes and rinse lightly"
    ],
    duration: "Use 1-2 times a week for 2-3 weeks",
    benefits: "Helps remove dandruff"
  },

  {
    method: "Cooking Use",
    steps: [
      "Take a fresh lemon",
      "Cut and squeeze the juice",
      "Add it to salads, curry, or other dishes",
      "Mix well before consuming"
    ],
    duration: "Use regularly in meals",
    benefits: "Improves taste and supports digestion"
  }
],
    methodsOfCultivation: {
      propagation: "Grafting or seeds",
      planting: {
        instructions: "Plant in well-drained soil.",
        spacing: "12-15 feet apart",
      },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Apply citrus fertilizer during growing season.",
      pruning: "Prune to maintain shape and encourage fruiting.",
      pestsAndDiseases: "Watch for aphids, mites, and fungal diseases.",
    },
  },

  {
    name: "Mugwort",
    botanicalName: "Artemisia vulgaris",
    commonNames: ["Mugwort"],
    category: ["Herbs", "Respiratory Health", "Hormonal Health"],
    imageUrl:
      "https://www.naturescape.co.uk/wp-content/uploads/2021/03/artemisia-vulgaris-g4ae725fc8_1920.jpg",
    modelUrl: "/models/mugwort.glb",
    habitat: {
      nativeRegion: "Europe and Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sun to partial shade",
        water: "Low water needs",
      },
    },
    medicinalUses: [
      {
        use: "Digestive Health",
        description: "Helps improve digestion and reduce bloating",
      },
      {
        use: "Calming",
        description:
          "Used in traditional medicine to promote relaxation and calm",
      },
    ],
    practicalUses: [
  {
    method: "Mugwort Tea",
    steps: [
      "Take 1 teaspoon of dried mugwort leaves",
      "Boil 1 cup of water in a pan",
      "Add the mugwort leaves to the boiling water",
      "Let it boil for 5-7 minutes",
      "Strain the tea",
      "Drink it warm"
    ],
    duration: "Drink once daily for 1-2 weeks",
    benefits: "Improves digestion and helps relieve bloating"
  },

  {
    method: "Relaxation Use",
    steps: [
      "Prepare mugwort tea as described above",
      "Drink it slowly in a calm environment",
      "Consume it before bedtime"
    ],
    duration: "Use daily at night for 1-2 weeks",
    benefits: "Promotes relaxation and better sleep"
  },

  {
    method: "Herbal Bath",
    steps: [
      "Take a handful of dried mugwort leaves",
      "Boil them in water for 10-15 minutes",
      "Strain the liquid",
      "Add it to your bath water",
      "Soak your body for 15-20 minutes"
    ],
    duration: "Use 2-3 times a week",
    benefits: "Relaxes muscles and reduces stress"
  },

  {
    method: "Digestive Aid",
    steps: [
      "Prepare a mild mugwort tea",
      "Drink a small amount after meals",
      "Consume in controlled quantity",
      "Avoid excessive intake"
    ],
    duration: "Use once daily for a few weeks",
    benefits: "Improves gut health and appetite"
  }
],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Plant in well-drained soil.",
        spacing: "12-18 inches apart",
      },
      watering: "Water sparingly, drought-tolerant.",
      fertilization: "Fertilize sparingly, if at all.",
      pruning: "Prune to control size and shape.",
      pestsAndDiseases: "Resistant to most pests and diseases.",
    },
  },
];

async function seedPlants() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing plants
    await Plant.deleteMany({});
    console.log("Cleared existing plants");

    // Insert sample plants
    const result = await Plant.insertMany(samplePlants);
    console.log(`${result.length} plants inserted`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding plants:", error);
  }
}

seedPlants();
