import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

const NewCase = () => {
  const navigate = useNavigate();
  const [caseinfo, setcaseinfo] = useState({
    data: "",
    update_data: "",
    files: [],
  });

  const { store, actions } = useContext(Context);

  const handleChange = (e) => {
    setcaseinfo({
      ...caseinfo,
      data: { ...caseinfo.data, [e.target.name]: e.target.value },
    });
  };

  const handleCaseUpdateChange = (e) => {
    setcaseinfo({
      ...caseinfo,
      update_data: { ...caseinfo.update_data, [e.target.name]: e.target.value },
    });
    console.log(caseinfo.update_data);
  };

  const handleFileChange = (e) => {
    setcaseinfo({
      ...caseinfo,
      files: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caseinfo.data !== "" || caseinfo.update_data !== "") {
      actions.addnewcase(caseinfo);
    }
    navigate(-1);
  };

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
          <button onClick={handleSubmit} className="btn btn-primary">
            Guardar Caso
          </button>
        </div>
      </div>
      <div className="bg-white rounded dashed-border p-4">
        <div className="row">
          <label className="my-2 text-primary">1.Informacion del caso</label>
          <div>
            <div className="row">
              <div className="col-12">
                <label>Nombre del caso</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="title"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label>Numero de proceso</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="exp_number"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Cliente</label>
                <div className="input-group mb-3">
                  <select
                    onChange={(e) => handleChange(e)}
                    name="client_id"
                    className="form-select"
                    id="inputGroupSelect01"
                    placeholder="Selecciona un cliente"
                  >
                    <option disabled selected>
                      Selecciona un cliente
                    </option>
                    {store.clients.map((client, index) => {
                      return (
                        <option
                          value={client.id}
                        >{`${client.name} ${client.first_lastname}`}</option>
                      );
                    })}
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
                  onChange={(e) => handleChange(e)}
                  name="cost"
                  type="text"
                  className="form-control"
                  placeholder="U$"
                  aria-label="Username"
                />
              </div>
              <div className="col-md-6">
                <label className="">Fecha de inicio</label>
                <input
                  onChange={(e) => handleChange(e)}
                  name="init_date"
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <label className="">Descripcion</label>
                <textarea
                  onChange={(e) => handleChange(e)}
                  name="description"
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
                <input
                  name="title"
                  onChange={handleCaseUpdateChange}
                  type="text"
                  className="form-control"
                />
                <label className="">Descripcion</label>
                <textarea
                  name="description"
                  onChange={handleCaseUpdateChange}
                  className="form-control"
                  aria-label="With textarea"
                  rows={4}
                />
                <label className="me-3">Subir archivos</label>
                <input
                  onChange={handleFileChange}
                  type="file"
                  multiple
                  name="file"
                />
              </div>
            </div>
            <div className="text-center">
              <button onClick={handleSubmit} className="btn btn-primary my-3">
                Guardar Caso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCase;
