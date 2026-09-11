const express = require("express");
const router = express.Router();

router.use(require("./authRoutes"));
router.use(require("./homeRoutes"));
router.use(require("./plantRoutes"));
router.use(require("./bookmarkRoutes"));
router.use(require("./noteRoutes"));
router.use(require("./contactRoutes"));
router.use(require("./chatbotRoutes"));

module.exports = router;
