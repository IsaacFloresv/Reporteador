import React from "react";

const Card_folders = ({ name, cant, client, edited, index }) => {
  return (
    <div className="d-flex mb-2">
      <div className="d-flex align-items-left justify-content-center">
        <div className="card text-left ">
          <div className="card-body">
            <div class="dropdown align-items-right d-md-flex justify-content-md-end">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                ...
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Eliminar
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Cambiar nombre
                </a>
              </div>
            </div>

            <div className="card-footer text-muted pb-0 mb-0">
              <p className="pb-0 mb-0">{name}</p>
              <p className="pb-0 mb-0">{cant} archivos</p>
              <p>
                <b>Cliente: </b>
                {client}
              </p>
              <p className="p-0 m-0">Ultimo cambio {edited}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_folders;
