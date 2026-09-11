// Talks to the Groq chat-completions API. Kept isolated in its own service
// so the controller doesn't need to know anything about HTTP headers,
// model names, or the Groq request/response shape.

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
//const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_MODEL = "openai/gpt-oss-120b";
async function getChatReply(plantContext, userMessage) {
  const response = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      max_tokens: 1024,
      messages: [
        {
          role: "system",
          content:
            "You are a smart herbal assistant. Answer in English. Be friendly. Always give step-by-step practical answers from given data. Do not say data is missing unless truly absent.",
        },
        {
          role: "user",
          content: `Plant Data:\n${plantContext}\n\nQuestion: ${userMessage}`,
        },
      ],
    }),
  });

  const data = await response.json();
  console.log("Groq Status:", response.status);
  console.log("Groq Response:", JSON.stringify(data).slice(0, 200));

  return data?.choices?.[0]?.message?.content || "Sorry, I didn't understand it 😊";
}

module.exports = { getChatReply };
