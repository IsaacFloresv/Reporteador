import React from "react";

const Card_documents = ({ name, caso, edited, index }) => {
  return (
    <div className="card text-left ">
      <div className="card-body">
        <img src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png" class=" card-img-top" alt="..." />
      </div>
      <div className="card-footer text-muted pb-0 mb-0">
        <p className="pb-0 mb-0">{name}</p>
          <p className="pb-0 mb-0">
            Caso: <a href="#">{caso}</a>
          </p>
        <p className="p-0 m-0">Editado el {edited}</p>
        <div class="dropdown d-md-flex justify-content-md-end">
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
      </div>
    </div>
  );
};

export default Card_documents;
