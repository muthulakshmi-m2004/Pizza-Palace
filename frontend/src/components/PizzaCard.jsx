import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import "./PizzaCard.css";

import { toast } from "react-toastify";

function PizzaCard({ pizza }) {

  const { addToCart } = useContext(CartContext);

  const handleCart = () => {

    addToCart(pizza);

    toast.success("Pizza Added To Cart 🍕");
  };

  return (
    <div className="pizza-card">

      <img src={pizza.image} alt={pizza.name} />

      <div className="pizza-content">

        <h2>{pizza.name}</h2>

        <p>{pizza.description}</p>

        <h4>₹ {pizza.price}</h4>

        <button onClick={handleCart}>
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default PizzaCard;