import React from "react";

// icons
import { FiUsers } from "react-icons/fi";

const Benefits = () => {
  return (
    <div className="container py-5 my-5">
      <div className="w-50 mx-auto text-center">
        <p className="m-0 fw-semibold text-primary">Todo Lo Que Necesitas</p>
        <h2 className="fw-bold">¿Por Que Usar DropCases?</h2>
        <p className=" mb-4">
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, ratione eos,
            <br className="d-none d-md-block" />
            facere accusantium id laborum voluptas.
          </small>
        </p>
      </div>

      <div className="row gap-5">
        <div className="col-12 col-md border border-1 rounded p-4">
          <div
            className="rounded d-flex justify-content-center align-items-center shadow mb-3"
            style={{ width: 45, height: 45, backgroundColor: "#82CF98" }}
          >
            <FiUsers size={25} color="white" />
          </div>
          <h6>Clientes</h6>
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            assumenda.
          </p>
        </div>
        <div className="col-12 col-md border border-1 rounded p-4 ">
          <div
            className="rounded d-flex justify-content-center align-items-center shadow mb-3"
            style={{ width: 45, height: 45, backgroundColor: "#82CF98" }}
          >
            <FiUsers size={25} color="white" />
          </div>
          <h6>Clientes</h6>
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            assumenda.
          </p>
        </div>
        <div className="col-12 col-md border border-1 rounded p-4">
          <div
            className="rounded d-flex justify-content-center align-items-center shadow mb-3"
            style={{ width: 45, height: 45, backgroundColor: "#82CF98" }}
          >
            <FiUsers size={25} color="white" />
          </div>
          <h6>Clientes</h6>
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
