import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Cart from "./pages/Cart";

import "./App.css";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Orders from "./pages/Orders";

import AddPizza from "./pages/AddPizza";

import ProtectedRoute from "./components/ProtectedRoute";

import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

<Route path="/login" element={<Login />}/>

<Route path="/register" element={<Register />}/>

<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>

<Route
  path="/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>

<Route
  path="/add-pizza"
  element={
    <ProtectedRoute>
      <AddPizza />
    </ProtectedRoute>
  }
/>

        

      </Routes>
      <Footer />

      <ToastContainer
      position="top-right"
      autoClose={2500}/>
      
    </BrowserRouter>
  );
}

export default App;
