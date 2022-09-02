import React from "react";
import { GrDocumentUpload } from "react-icons/gr/index";
import { useNavigate } from "react-router-dom";

const NewCase = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <h5 className="p-0">Agregar un nuevo caso</h5>
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-link text-danger btn-cancel"
          >
            Cancel
          </button>
          <button className="btn btn-primary">Guardar Caso</button>
        </div>
      </div>
      <div className="bg-white rounded dashed-border p-4">
        <div className="row">
          <label className="my-2 text-primary">1.Informacion del caso</label>
          <div>
            <div className="row">
              <div className="col-12">
                <label>Nombre del caso</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Numero de proceso</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Cliente</label>
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    defaultValue={1}
                  >
                    <option value="1">Customer 1</option>
                    <option value="2">Customer 2</option>
                    <option value="3">Customer ...</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="py-0">
                  Cost <label className="fw-light"> (Optional)</label>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="U$"
                  aria-label="Username"
                />
              </div>
              <div className="col-md-6">
                <label className="">Fecha de inicio</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12">
                <label className="">Descripcion</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows={7}
                />
              </div>
            </div>
            <br />
            <hr />
            <div className="">
              <label className="text-primary">2. Primera Actualizacion</label>
              <div className="">
                <label className="">Titulo</label>
                <input type="text" className="form-control" />
                <label className="">Descripcion</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows={4}
                />
                <label className="">Subir archivos</label>
                <div className="dashed-border-upload form-control text-center upload-bg">
                  <GrDocumentUpload />
                  <div>Drag and drop your file </div>
                  <div>Max-size 1Mb</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary my-3">
                Agregar una nueva actualizacion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCase;
