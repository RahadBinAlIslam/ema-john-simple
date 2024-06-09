import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user } = UserContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
