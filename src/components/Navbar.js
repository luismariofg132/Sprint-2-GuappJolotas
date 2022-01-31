import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="menu">
      <Link to="/principal">
        <img
          src="https://res.cloudinary.com/jadergomez/image/upload/v1643586875/logo_qnqilw_rvsqzq.png"
          alt="logo"
          width="100"
        />
      </Link>

    </nav>
  );
};
