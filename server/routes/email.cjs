const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/email.cjs");

router.post("/emails", sendEmail);

module.exports = router;
