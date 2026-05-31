const express = require("express");

const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const newOrder = new Order(req.body);

    await newOrder.save();

    res.json({
      message: "Order placed successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {

  try {

    const orders = await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
