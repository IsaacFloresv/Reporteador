import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit, FiSmartphone } from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import { AiOutlineNumber, AiOutlineCalendar } from "react-icons/ai";
import { BsBriefcase, BsJournalText } from "react-icons/bs";
import CaseUpdate from "../../components/case_update/CaseUpdate.jsx";
import PaymentWidget from "../../components/payment-widget/PaymentWidget.jsx";

const Caso = () => {
  const data = [0, 0, 0, 0, 0, 0];

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Left --- */}
          <div className="col-12 col-lg-8 ps-0">
            <div className="bg-white rounded shadow-sm p-4">
              <div
                className="d-flex justify-content-between"
                id="client-overview"
              >
                <div className="d-flex align-items-center">
                  <div
                    className="bg-light rounded d-flex align-items-center justify-content-center"
                    style={{ width: 110, height: 110 }}
                  >
                    <BsBriefcase size={50} color="grey" />
                  </div>
                  <div className="ms-3">
                    <div className="d-flex justify-content-between">
                      <span class="badge fw-normal text-bg-primary text-white my-2">
                        Activo
                      </span>
                      <div className="d-flex align-items-start">
                        <Link to="/nuevo-cliente">
                          <button className="btn btn-outline-dark btn-sm">
                            <FiEdit />
                            <span className="ms-2">Editar Cliente</span>
                          </button>
                          <button className="btn btn-dark btn-sm ms-2">
                            Eliminar
                          </button>
                        </Link>
                      </div>
                    </div>
                    <h3 className="fw-bold mb-0 mt-2">
                      Difamacion publica por Amber Heard contra jhonny deep.
                    </h3>
                    <span>Cliente:</span>
                    <span className="fw-semibold"> Client Name</span>
                  </div>
                </div>
              </div>
              <hr />
              <div id="personal-info">
                <h6 className="fw-bold my-3">Informacion del caso</h6>
                <div className="d-flex">
                  <AiOutlineNumber className="text-primary me-2" size={20} />
                  <div className="d-flex">
                    <p className="fw-bold me-2">Numero de proceso:</p>
                    <span>#1043</span>
                  </div>
                </div>
                <div className="d-flex">
                  <AiOutlineCalendar className="text-primary me-2" size={20} />
                  <div className="d-flex">
                    <p className="fw-bold me-2">Fecha de inicio:</p>
                    <span>20/08/2022</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <BsJournalText className="text-primary me-2" size={20} />
                  </div>
                  <div>
                    <p className="fw-bold me-2 mb-0">Descripcion:</p>
                    <p>
                      incidunt adipisci? Possimus, modi repellendus, non soluta
                      esse praesentium sequi mollitia error reprehenderit
                      necessitatibus voluptate distinctio animi quam, dolores at
                      quos architecto. Voluptatibus natus commodi autem rem
                      assumenda corporis quidem quibusdam, asperiores, suscipit
                      nihil omnis magni quasi ipsa.
                      <br />
                      <br />
                      Corrupti expedita dolores perspiciatis fugiat possimus
                      necessitatibus quia minima eaque impedit consectetur ipsam
                      sequi, modi voluptatem similique dolorum iure et ratione
                      dolorem facere perferendis veniam ducimus id libero
                      voluptate. Libero iure facilis dolorum impedit! Cum
                      debitis eum ratione ipsam, sit sapiente. Explicabo nostrum
                      id nam esse.
                    </p>
                  </div>
                </div>
              </div>
              {/* Casos Asignados */}
              <hr />
              <div id="casos-asignados">
                <CaseUpdate />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-4">
            <div className="bg-white rounded shadow-sm px-3">
              <div className="pt-3">
                <h5 className="fw-bold">Total de costo del servicio</h5>
                <div className="rounded py-3" style={{ background: "#F0F0F0" }}>
                  <h5 className="text-center mb-0">$1,283.22</h5>
                </div>
              </div>
              <hr />
              <div>
                <h5 className="mb-3">Pagos abonados</h5>
                {data.map((e, i) => {
                  return <PaymentWidget color="#DEF6E5" />;
                })}
                <hr />
              </div>
              <div>
                <h5 className="mb-3">Pagos Pendientes</h5>
                {data.map((e, i) => {
                  return <PaymentWidget color="#FFFFBE" />;
                })}
                <hr />
              </div>
              <div>
                <button className="btn btn-primary w-100 text-center mb-3">Crear solicitud de pago</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caso;
