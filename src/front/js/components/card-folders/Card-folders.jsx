import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Card_folders = ({ name, cant, client, edited, index }) => {
  return (
    <div className="mb-2">
      <div className="me-2">
        <div className="card text-left ">
          <div className="card-body">
            {/* ICON */}
            <div className="d-flex justify-content-between mb-2">
              <div
                style={{ width: 50, height: 50 }}
                className="bg-light rounded rounded-circle d-flex justify-content-center align-items-center"
              >
                <AiFillFolder size={20} color="green" />
              </div>
              <div class="dropdown">
                <div data-bs-toggle="dropdown" aria-expanded="false">
                  <BiDotsHorizontalRounded
                    size={30}
                    color="grey"
                    className="mt-2"
                  />
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* FIN ICON */}
            <p className="pb-0 mb-0 fw-bold h6">{name}</p>
            <p className="pb-0 mb-0 text-muted"><small>{cant} archivos </small></p>
            <p>
              <b>Cliente: </b>
              {client}
            </p>
            <p className="p-0 m-0">Ultimo cambio {edited}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_folders;
