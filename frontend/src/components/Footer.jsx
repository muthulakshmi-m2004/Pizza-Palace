import logo from "../assets/pizza-logo.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FF8C42",
        color: "white",
        marginTop: "60px",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Logo Section */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={logo}
              alt="Pizza Palace"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
              }}
            />

            <h2>Pizza Palace</h2>
          </div>

          <p
            style={{
              marginTop: "10px",
              maxWidth: "300px",
            }}
          >
            Serving fresh, hot and delicious pizzas
            made with premium ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Cart</p>
          <p>Orders</p>
          <p>Add Pizza</p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact Us</h3>

          <p>📧 pizzapalace@gmail.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Chennai, India</p>
        </div>
      </div>

      <hr
        style={{
          margin: "25px 0",
          borderColor: "rgba(255,255,255,0.3)",
        }}
      />

      <p
        style={{
          textAlign: "center",
        }}
      >
        © 2026 Pizza Palace. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
