import React from "react";
import logo from "../../../../../public/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container py-3">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="w-25">
          <img src={logo} width="170" />
        </div>
        <div>
          <Link to="/login">
            <span className="mx-2 btn btn-primary-link">Ingresar</span>
          </Link>
          <Link to="/registro">
            <button className="btn btn-outline-primary">Registrarse</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
