import React, { useContext, useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const Casos = () => {
  const { store, actions } = useContext(Context);
  const [cases, setcases] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    setcases(store.cases);
    console.log(cases);
  }, [store.cases]);

  useEffect(() => {
    const usersfilter = store.cases.filter((s) =>
      s.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setcases(usersfilter);
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
        <h5>Mis Casos</h5>
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
            <span className="mx-2 fw-semibold">{cases.length} Casos</span>
          </div>
          <Link to="/nuevo-caso">
            <button className="btn btn-primary btn-sm">+ Abrir Caso</button>
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
                      Descripcion
                    </th>
                    <th
                      style={{ fontSize: 0.8 + "rem" }}
                      className="fw-normal text-muted text-center"
                    >
                      Status
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
                  {cases.map((item, index) => {
                    return (
                      <tr>
                        <td scope="row" className="text-center">
                          {checkbox}
                        </td>
                        <td>
                          <Link
                            to="/caso/ale"
                            className="text-decoration-none text-black"
                          >
                            <div className="d-flex align-items-center">
                              <div
                                className="bg-light rounded d-flex align-items-center justify-content-center"
                                style={{ width: 40, height: 40 }}
                              >
                                <BsBriefcase size={20} />
                              </div>
                              <div className="d-flex flex-column mx-3">
                                <span className="fw-semibold">
                                  {item.title}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td>
                          <div className="w-50 mx-auto badge text-bg-primary fw-normal text-white d-flex align-items-center justify-content-center">
                            <span>Activo</span>
                          </div>
                        </td>
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

export default Casos;
