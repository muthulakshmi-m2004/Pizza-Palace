import { useEffect, useState } from "react";
import API from "../services/api";
import PizzaCard from "../components/PizzaCard";

import heroPizza from "../assets/hero-pizza.png";

import margherita from "../assets/pizzas/margherita.jpg";
import pepperoni from "../assets/pizzas/pepperoni.jpg";
import cheeseburst from "../assets/pizzas/cheeseburst.jpg";
import veggie from "../assets/pizzas/veggie.jpg";
import farmhouse from "../assets/pizzas/farmhouse.jpg";
import chickenpizza from "../assets/pizzas/chickenpizza.jpg";
import bbqchicken from "../assets/pizzas/bbqchicken.jpg";
import mexican from "../assets/pizzas/mexican.jpg";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    try {
      const response = await API.get("/pizzas");
      setPizzas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const featuredPizzas = [
    { name: "Margherita", image: margherita },
    { name: "Pepperoni", image: pepperoni },
    { name: "Cheese Burst", image: cheeseburst },
    { name: "Veggie", image: veggie },
    { name: "Farmhouse", image: farmhouse },
    { name: "Chicken Pizza", image: chickenpizza },
    { name: "BBQ Chicken", image: bbqchicken },
    { name: "Mexican Green Wave", image: mexican },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
          flexWrap: "wrap",
          gap: "40px",
          backgroundColor: "#FFF8F0",
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "300px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              color: "#FF8C42",
              marginBottom: "20px",
            }}
          >
            Hot & Fresh Pizza
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "600px",
            }}
          >
            Experience delicious handcrafted pizzas made
            with fresh ingredients, cheesy toppings and
            unforgettable flavors.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <span>🚚 Fast Delivery</span>
            <span>🧀 Fresh Cheese</span>
            <span>🔥 Hot & Tasty</span>
          </div>

          <a
            href="#featured-menu"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                marginTop: "30px",
                backgroundColor: "#FF8C42",
                color: "white",
                border: "none",
                padding: "15px 28px",
                borderRadius: "10px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Explore Menu
            </button>
          </a>
        </div>

        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          <img
            src={heroPizza}
            alt="pizza"
            style={{
              width: "100%",
              maxWidth: "550px",
              objectFit: "contain",
            }}
          />
        </div>
      </section>

      {/* Featured Pizzas */}
      <section
        id="featured-menu"
        style={{
          padding: "60px 40px",
          backgroundColor: "#fff8f0",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#FF8C42",
            fontSize: "40px",
          }}
        >
          Featured Pizzas
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,300px))",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {featuredPizzas.map((pizza, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "0px 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  textAlign: "center",
                  padding: "15px",
                }}
              >
                {pizza.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* MongoDB Menu */}
      <section
        id="menu"
        style={{
          padding: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#FF8C42",
            fontSize: "40px",
          }}
        >
          Available Menu
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,350px))",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza._id}
              pizza={pizza}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
