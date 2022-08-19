import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Clientes = () => {
  const checkbox = (
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
  );

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Todos los clientes</h5>
        <div
          className="d-flex align-items-center"
          style={{ fontSize: 0.75 + "rem" }}
        >
          <div>
            <span>Ordenar</span>
            <span className="mx-2 fw-semibold dropdown-toggle">
              Alfabeticamente
            </span>
          </div>
          <div className="mx-2">
            <span>Total:</span>
            <span className="mx-2 fw-semibold">38 Clientes</span>
          </div>
          <Link to="/nuevo-cliente">
            <button className="btn btn-primary btn-sm">
              + Agregar Nuevo cliente
            </button>
          </Link>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {/* Left --- */}
          <div className="col-12 col-lg-8 ps-0">
            <div className="bg-white rounded">
              <table className="table">
                <thead className="px-2">
                  <tr style={{ backgroundColor: "#FCFDFF" }}>
                    <th
                      scope="col"
                      className="fw-normal text-muted col-1 text-center"
                    >
                      {checkbox}
                    </th>
                    <th
                      style={{ fontSize: 0.8 + "rem" }}
                      className="fw-normal text-muted col-7"
                    >
                      Nombre Completo
                    </th>
                    <th
                      style={{ fontSize: 0.8 + "rem" }}
                      className="fw-normal text-muted text-center"
                    >
                      Status
                    </th>
                    <th
                      style={{ fontSize: 0.8 + "rem" }}
                      className="fw-normal text-muted text-center"
                    >
                      Casos
                    </th>
                    <th
                      style={{ fontSize: 0.8 + "rem" }}
                      className="fw-normal text-muted text-center col-1 pe-4"
                    >
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr>
                        <td scope="row" className="text-center">
                          {checkbox}
                        </td>
                        <td>
                          <img
                            src="https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2022/06/13/62a776a005e6f.r_d.3200-2132.jpeg"
                            width={40}
                            height={40}
                            alt=""
                            className="rounded"
                            style={{ objectFit: "cover" }}
                          />{" "}
                          <span className="mx-2 fw-semibold">
                            Jonny Deep Martinez
                          </span>
                        </td>
                        <td>
                          <div className="badge text-bg-primary fw-normal text-white d-flex align-items-center justify-content-center">
                            <span>Activo</span>
                          </div>
                        </td>
                        <td className="text-center">8</td>
                        <td className="text-center">
                          <BiDotsHorizontalRounded size={17} color="gray" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* Right --- */}
          <div className="col-12 col-lg-4 pe-0">
            <div className="bg-white rounded">
              <div
                className="d-flex justify-content-between px-4 align-items-center"
                style={{ backgroundColor: "#FCFDFF" }}
              >
                <span>Buscar Cliente</span>
                <button className="btn link-danger px-0">clear</button>
              </div>
              <div className="p-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ejemplo: juan..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;
