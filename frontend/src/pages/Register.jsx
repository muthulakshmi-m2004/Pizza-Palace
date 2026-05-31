import { useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
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
        "/auth/register",
        formData
      );

      toast.success(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );
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
          }}
        >
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Register
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
  fontWeight: "bold",
};

export default Register;
