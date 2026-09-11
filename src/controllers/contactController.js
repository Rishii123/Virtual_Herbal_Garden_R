const { Contact } = require("../models");

function getContact(req, res) {
  if (!req.session.userId) return res.redirect("/login");
  res.render("contact");
}

async function submitContact(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required!");
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.send("Thank you! Your message has been submitted successfully.");
  } catch (error) {
    console.error("Error saving contact info:", error);
    res.status(500).send("Something went wrong. Please try again later.");
  }
}

module.exports = {
  getContact,
  submitContact,
};
