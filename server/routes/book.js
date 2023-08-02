const express = require("express");

const router = express.Router();

// Controller
const bookController = require("../controllers/book");

router.get("/book", bookController.getBook);
router.post("/book", bookController.postBook);

module.exports = router;
