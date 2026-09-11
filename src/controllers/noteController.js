const { LogInCollection } = require("../models");

async function addNote(req, res) {
  const userId = req.session.userId;
  const noteText = req.body.noteText;

  if (!userId) {
    return res
      .status(401)
      .json({ success: false, message: "You need to log in to save notes." });
  }

  if (!noteText || noteText.trim() === "") {
    return res
      .status(400)
      .json({ success: false, message: "Note text cannot be empty." });
  }

  try {
    const user = await LogInCollection.findById(userId);

    const newNote = { text: noteText.trim() };

    user.notes.push(newNote);
    await user.save();
    res.status(303).redirect("/notes");
  } catch (error) {
    console.error("Error saving note:", error);
    res.status(303).redirect("/notes");
  }
}

async function getNotes(req, res) {
  const userId = req.session.userId;

  if (!userId) {
    return res.redirect("/login");
  }

  try {
    const user = await LogInCollection.findById(userId);

    res.render("notes", { notes: user.notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Error fetching notes.");
  }
}

async function deleteNote(req, res) {
  const userId = req.session.userId;
  const noteId = req.params.noteId;

  if (!userId) {
    return res.redirect("/login");
  }

  try {
    await LogInCollection.updateOne(
      { _id: userId },
      { $pull: { notes: { _id: noteId } } },
    );

    res.redirect("/notes");
  } catch (error) {
    console.error("Delete error:", error);
    res.redirect("/notes");
  }
}

module.exports = {
  addNote,
  getNotes,
  deleteNote,
};
