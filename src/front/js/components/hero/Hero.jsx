import React from "react";
import laptop from "../../../../../public/assets/macbook.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container pt-5">
      <div className="row mx-auto text-center">
        <h1
          className="text-capitalize fw-bold my-4"
          style={{ fontSize: 3 + "rem" }}
        >
          Administracion de Clientes y Casos donde quieras y cuando quieras
        </h1>
        <p className=" mb-4 mx-auto">
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, ratione eos,
            <br className="d-none d-md-block" />
            facere accusantium id laborum voluptas.
          </small>
        </p>
        <div className="mt-2">
          <Link to="/registro">
            <button className="btn btn-primary mx-2">Prueba Gratis</button>
          </Link>
          <button className="btn btn-link mx-2 text-decoration-none">
            Ver Mas
          </button>
        </div>
      </div>
      <div className="row">
        <img src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
