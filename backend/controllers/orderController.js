import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {

  try {

    const newOrder = new Order(req.body);

    await newOrder.save();

    res.status(201).json({
      message: "Order Placed Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};
