import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div>logo</div>
      <div>Home</div>
      <div>
        <Link to="/wishlist">Wishlist</Link>
      </div>
    </div>
  );
};
