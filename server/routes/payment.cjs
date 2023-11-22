const express = require("express");
const router = express.Router();
const { createOrder } = require("./../controllers/payment.cjs");

router.get("/create-order", createOrder);

router.get("/success", (req, res) => res.send("Creating order"));

router.get("/webhook", (req, res) => res.send("webhook"));

module.exports = router;
