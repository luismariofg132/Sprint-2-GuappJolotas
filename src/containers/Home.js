import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Seleccion from "../components/Seleccion";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to={"/"}></Link>
          <Link to="/car" className="carrito">
            <AiOutlineShoppingCart className="carrito" />
          </Link>
        </nav>
        <Navbar />
      </div>
    );
  }
}
