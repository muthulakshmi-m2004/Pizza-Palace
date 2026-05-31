import { useState } from "react";

import API from "../services/api";

import { toast } from "react-toastify";
function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      toast.success("Login Successful");

    } catch (error) {

     toast.error("Invalid Credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF8F0",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#FF8C42",
          padding: "40px",
          width: "420px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        }}
      >

       <h1
  style={{
    textAlign: "center",
    color: "white",
    fontSize: "42px",
    fontWeight: "bold",
  }}
>
  Login
</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Login
        </button>

      </form>

    </div>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Login;
