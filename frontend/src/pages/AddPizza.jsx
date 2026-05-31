import { useState } from "react";

import API from "../services/api";

import { toast } from "react-toastify";

function AddPizza() {

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    price: "",
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

      await API.post("/pizzas", formData);

      toast.success("Pizza Added Successfully");

      setFormData({
        name: "",
        category: "",
        image: "",
        description: "",
        price: "",
      });

    } catch (error) {

      console.log(error);
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
        padding: "20px",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#FF8C42",
          padding: "40px",
          borderRadius: "15px",
          width: "450px",
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
            marginBottom: "10px",
          }}
        >
          Add Pizza
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Pizza Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{
            ...inputStyle,
            height: "100px",
            resize: "none",
          }}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add Pizza
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
  outline: "none",
};

export default AddPizza;
