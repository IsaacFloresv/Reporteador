import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit, FiSmartphone } from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import { BsFillBriefcaseFill, BsClockHistory } from "react-icons/bs";
import { Context } from "../../store/appContext.js";

const Client = () => {
  const [user, setuser] = useState({});
  const { store, actions } = useContext(Context);
  const { name } = useParams();

  useEffect(() => {
    actions.getClient(name);
  }, []);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Left --- */}
          <div className="ps-0">
            <div className="bg-white rounded p-4">
              <div
                className="d-flex justify-content-between"
                id="client-overview"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://wallchase.com/assets/img/no-pic.jpg"
                    alt="client-picture"
                    height={110}
                    width={110}
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                  <div className="mx-3">
                    <span class="badge fw-normal text-bg-primary text-white">
                      Activo
                    </span>
                    <h3 className="fw-bold mb-0">
                      {store.currentClient.user.name}
                      <br />
                      {`${store.currentClient.user.first_lastname} ${store.currentClient.user.second_lastname}`}
                    </h3>
                    <span className="fw-semibold"> DNI: 99999999</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <Link to="/nuevo-cliente">
                    <button className="btn btn-outline-dark btn-sm">
                      <FiEdit />
                      <span className="ms-2">Editar Cliente</span>
                    </button>
                    <button className="btn btn-dark btn-sm mx-2">
                      Eliminar
                    </button>
                  </Link>
                </div>
              </div>
              <hr />
              <div id="personal-info">
                <h6 className="fw-bold my-3">Informacion Personal</h6>
                <div className="row">
                  <div className="col d-flex align-items-center my-2">
                    <div
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#B4E8C3",
                      }}
                    >
                      <FiSmartphone size={20} color="#5FB578" />
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0">Telefonos:</p>
                      <p className="m-0">+51 888 888 888</p>
                    </div>
                  </div>
                  <div className="col d-flex align-items-center">
                    <div
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#B4E8C3",
                      }}
                    >
                      <FiSmartphone size={20} color="#5FB578" />
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0">Telefonos:</p>
                      <p className="m-0">+51 888 888 888</p>
                    </div>
                  </div>
                  <div className="col d-flex align-items-center">
                    <div
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#B4E8C3",
                      }}
                    >
                      <FiSmartphone size={20} color="#5FB578" />
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0">Telefonos:</p>
                      <p className="m-0">+51 888 888 888</p>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="row">
                  <div className="col d-flex align-items-center my-2">
                    <div
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#F3F3C4",
                      }}
                    >
                      <TbMail size={20} color="#B8B84D" />
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0">Correo Electronico:</p>
                      <p className="m-0">jacksparrow@gmail.com</p>
                    </div>
                  </div>
                  <div className="col d-flex align-items-center">
                    <div
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#F3F3C4",
                      }}
                    >
                      <TbMail size={20} color="#B8B84D" />
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0">Correo Electronico:</p>
                      <p className="m-0">jacksparrow@gmail.com</p>
                    </div>
                  </div>
                  <div className="col d-flex align-items-center">
                    <div
                      className="rounded d-flex align-items-center justify-content-center"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#F3F3C4",
                      }}
                    >
                      <TbMail size={20} color="#B8B84D" />
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0">Correo Electronico:</p>
                      <p className="m-0">jacksparrow@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Casos Asignados */}
              <hr />
              <div id="casos-asignados">
                <h6 className="fw-bold my-3">Casos asignados</h6>
                <div className="row">
                  <div className="col-3 mb-3">
                    <div className="rounded border p-3">
                      <div className="d-flex justify-content-end">
                        <span className="badge text-bg-primary text-white pt-1">
                          Abierto
                        </span>
                      </div>
                      <div
                        className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                        style={{ marginTop: -20, width: 50, height: 50 }}
                      >
                        <BsFillBriefcaseFill size={20} color="#82CF98" />
                      </div>
                      <h6 className="mt-3">Nombre del caso</h6>
                      <span
                        className="badge py-1 text-black fw-normal"
                        style={{ backgroundColor: "#DEF6E5" }}
                      >
                        Categoria aqui
                      </span>
                      <div className="mt-2">
                        <BsClockHistory color="#999999" />
                        <span
                          className="mx-2 text-muted"
                          style={{ fontSize: 0.75 + "rem" }}
                        >
                          Creado: Agosto 12, 2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
