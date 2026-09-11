const { Plant } = require("../models");
const { getChatReply } = require("../services/groqService");
const buildPlantContext = require("../utils/buildPlantContext");

async function handleChat(req, res) {
  try {
    const userMessage = req.body.message;

    const words = userMessage.split(" ");

    let plants = await Plant.find({
      $or: [
        { name: { $regex: userMessage, $options: "i" } },
        { commonNames: { $in: words.map((w) => new RegExp(w, "i")) } },
      ],
    });

    const context = buildPlantContext(plants);

    const botReply = await getChatReply(context, userMessage);

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Chatbot error:", error.message);
    res.json({
      reply: "Server is currently busy 😓 Please wait for some time",
    });
  }
}

module.exports = { handleChat };
