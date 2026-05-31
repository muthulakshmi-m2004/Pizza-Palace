import { Link } from "react-router-dom";

import logo from "../assets/pizza-logo.png";

import { toast} from "react-toastify";

function Navbar() {

  return (
    <nav
      style={{
        backgroundColor: "#FF8C42",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >

        <img
          src={logo}
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
          }}
        />

        <h1
          style={{
            color: "white",
            fontSize: "28px",
          }}
        >
          Pizza Palace
        </h1>

      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >

        <Link style={navStyle} to="/">
          Home
        </Link>

        <Link style={navStyle} to="/cart">
          Cart
        </Link>

        <Link style={navStyle} to="/orders">
          Orders
        </Link>

        <Link style={navStyle} to="/add-pizza">
          Add Pizza
        </Link>

        <Link style={navStyle} to="/login">
          Login
        </Link>

        <Link style={navStyle} to="/register">
          Register
        </Link>

        <button
          onClick={() => {

            localStorage.removeItem("token");

            toast.success("Logged Out Successfully");

            window.location.href = "/login";
          }}

          style={{
            backgroundColor: "white",
            color: "#FF8C42",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
  fontWeight: "500",
};

export default Navbar;
