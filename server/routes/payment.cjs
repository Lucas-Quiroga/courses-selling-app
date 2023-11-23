const express = require("express");
const router = express.Router();
const { createOrder, receiveWebhook } = require("../controllers/payment.cjs");

router.post("/create-order", createOrder);

router.get("/success", (req, res) => res.send("Creating order"));

router.get("/failure", (req, res) => res.send("Failure"));

router.get("/pending", (req, res) => res.send("Pending"));

router.post("/webhook", receiveWebhook);

module.exports = router;
