const express = require("express");
const router = express.Router();
const bookmarkController = require("../controllers/bookmarkController");

router.get("/bookmarks", bookmarkController.getBookmarks);
router.post("/add-to-bookmarks/:plantId", bookmarkController.addBookmark);
router.post("/remove-bookmark/:plantId", bookmarkController.removeBookmark);

module.exports = router;
