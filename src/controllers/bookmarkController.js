const { LogInCollection } = require("../models");

async function addBookmark(req, res) {
  const { plantId } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    return res
      .status(401)
      .json({ success: false, error: "User not logged in" });
  }

  try {
    const user = await LogInCollection.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    if (user.bookmarks.includes(plantId)) {
      console.log("Already bookmarked → sending error response");
      return res.json({ success: false, error: "Plant is already bookmarked" });
    }

    user.bookmarks.push(plantId);
    await user.save();

    console.log("New bookmark added → sending success response");
    return res.json({ success: true, message: "Plant added to bookmarks" });
  } catch (error) {
    console.error("Error adding to bookmarks:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
}

async function removeBookmark(req, res) {
  const { plantId } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    return res
      .status(401)
      .json({ success: false, error: "User not logged in" });
  }

  try {
    await LogInCollection.updateOne(
      { _id: userId },
      { $pull: { bookmarks: plantId } },
    );

    res.status(303).redirect("/bookmarks");
  } catch (error) {
    console.error("Error removing bookmark:", error);
    res.status(500).send("Something went wrong");
  }
}

async function getBookmarks(req, res) {
  const userId = req.session.userId;

  if (!userId) {
    return res.redirect("/login");
  }

  try {
    const user = await LogInCollection.findById(userId).populate("bookmarks");
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.render("bookmark", { plants: user.bookmarks });
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  addBookmark,
  removeBookmark,
  getBookmarks,
};
