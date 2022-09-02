import React, { useContext, useEffect, useState } from "react";
import { BiDotsHorizontalRounded, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Clientes = () => {
  const { store, actions } = useContext(Context);
  const [users, setusers] = useState(store.clients);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    setusers(store.clients);
  }, [store.clients]);

  useEffect(() => {
    const usersfilter = store.clients.filter((value) =>
      value.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setusers(usersfilter);
  }, [searchValue]);

  const checkbox = (
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
  );

  const handleDelete = (index) => {
    actions.deleteClient(index);
  };

  const handleFavorite = (index) => {
    actions.addtofavorite(index);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5>Todos los clientes</h5>
        <div
          className="d-flex align-items-center"
          style={{ fontSize: 0.75 + "rem" }}
        >
          {/* <div>
            <span>Ordenar</span>
            <span className="mx-2 fw-semibold dropdown-toggle">
              Alfabeticamente
            </span>
          </div> */}
          <div className="mx-2">
            <span>Total:</span>
            <span className="mx-2 fw-semibold">
              {store.clients.length} Clientes
            </span>
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
                      m
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
                  {users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row" className="text-center">
                          {checkbox}
                        </td>
                        <td>
                          <Link
                            className="text-decoration-none text-black"
                            to={`/client/${item.id}`}
                          >
                            <img
                              src="https://wallchase.com/assets/img/no-pic.jpg"
                              width={40}
                              height={40}
                              alt=""
                              className="rounded"
                              style={{ objectFit: "cover" }}
                            />{" "}
                            <span className="mx-2 fw-semibold">
                              {item.favorite ? (
                                <BiStar
                                  size={20}
                                  className="me-2"
                                  color="#D2B43B"
                                />
                              ) : (
                                ""
                              )}
                              {`${item.name} ${item.first_lastname} ${item.second_lastname}`}
                            </span>
                          </Link>
                        </td>
                        <td>
                          <div className="badge text-bg-primary fw-normal text-white d-flex align-items-center justify-content-center">
                            <span>Activo</span>
                          </div>
                        </td>
                        <td className="text-center">8</td>
                        <td className="text-center">
                          <div class="btn-group dropend">
                            <div
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <BiDotsHorizontalRounded size={17} color="gray" />
                            </div>
                            <ul class="dropdown-menu">
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  onClick={() => handleDelete(index)}
                                >
                                  Eliminar
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  onClick={() => handleFavorite(index)}
                                >
                                  Seguir
                                </a>
                              </li>
                            </ul>
                          </div>
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
                <button className="btn link-danger px-0">limpiar</button>
              </div>
              <div className="p-4">
                <input
                  onChange={(e) => setsearchValue(e.target.value)}
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
