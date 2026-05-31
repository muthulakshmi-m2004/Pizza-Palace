import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import API from "../services/api";

import {toast} from "react-toastify";

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {

    try {

      await API.post("/orders", {

        user: "Pizza Customer",

        items: cartItems,

        totalAmount: totalPrice,
      });

      toast.success("Order Placed Successfully");
    } catch (error) {

      toast.error("Order Failed");
    }
  };

  return (
    <div style={{ minHeight: "70vh",padding: "30px" }}>

      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (

        <h3>No items in cart</h3>

      ) : (

        <>
          {cartItems.map((item) => (

            <div
              key={item._id}
              style={{
                backgroundColor: "white",
                padding: "15px",
                marginTop: "15px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                }}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div>

                  <h2>{item.name}</h2>

                  <h4>₹ {item.price}</h4>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >

                    <button
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

              <h3>
                ₹ {item.price * item.quantity}
              </h3>

            </div>
          ))}

          <h2 style={{ marginTop: "20px" }}>
            Total: ₹ {totalPrice}
          </h2>

          <button
            onClick={placeOrder}
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Place Order
          </button>

        </>
      )}
    </div>
  );
}

export default Cart;
