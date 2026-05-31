import { useEffect, useState } from "react";

import API from "../services/api";

function Orders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {

    try {

      const response = await API.get("/orders");

      setOrders(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchOrders();

  }, []);

  return (
    <div style={{ padding: "30px" }}>

      <h1>My Orders</h1>

      {orders.map((order) => (

        <div
          key={order._id}
          style={{
            backgroundColor: "#FFF8F0",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >

          <h3>User: {order.user}</h3>

          <h4>Total: ₹ {order.totalAmount}</h4>

          {order.items.map((item, index) => (

            <div
              key={index}
              style={{
                marginTop: "10px",
                borderTop: "1px solid gray",
                paddingTop: "10px",
              }}
            >

              <p>{item.name}</p>

              <p>Quantity: {item.quantity}</p>

            </div>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Orders;
