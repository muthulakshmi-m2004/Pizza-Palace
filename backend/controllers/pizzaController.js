const Pizza = require("../models/Pizza");

const createPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body);

    res.status(201).json({
      message: "Pizza added successfully",
      pizza,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();

    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPizza,
  getPizzas,
};
