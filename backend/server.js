const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const pizzaRoutes = require("./routes/pizzaRoutes");
const orderRoutes = require("./routes/orderRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/pizzas", pizzaRoutes);

app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
