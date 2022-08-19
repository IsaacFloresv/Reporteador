import React from "react";

const Pricing = () => {
  return (
    <div className="container py-5 my-5">
      <div className="w-50 mx-auto text-center">
        <p className="m-0 fw-semibold text-primary">Precio Insuperable</p>
        <h2 className="fw-bold">Nuestros Planes</h2>
        <p className=" mb-4">
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, ratione eos,
            <br className="d-none d-md-block" />
            facere accusantium id laborum voluptas.
          </small>
        </p>
      </div>

      {/* Pricing */}
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 px-3 mx-auto text-center">
          <div className="card h-100 border-0 shadow-lg">
            <div className="card-body">
              <div>
                <p className="fw-semibold text-primary">
                  Comienza una prueba gratis de 14 dias
                </p>
                <hr />
              </div>
              <div>
                <span className="h2 text-primary">$8</span> / Mes
                <br />
              </div>
              <p className="card-text text-muted">
                <small>Cancela en cualquier momento, sin preguntas.</small>
              </p>
            </div>

            <div className="card-body text-center">
              <button className="btn btn-outline-primary">
                Comenzar Mi Prueba Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
