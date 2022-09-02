import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

const NewClient = () => {
  const [user, setuser] = useState(null);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.name === "profile_picture") {
      setuser({
        ...user,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setuser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addClient(
      {
        // userdata
        lawyer_id: store.user.id,
        name: user.name,
        dni: user.dni,
        first_lastname: user.first_lastname,
        second_lastname: user.second_lastname,
        is_active: true,
      },
      {
        // usercontact
        client_id: store.user.id,
        phone_one: user.phone_one,
        phone_two: user.phone_two,
        email_one: user.email_one,
        email_two: user.email_two,
        address_one: user.address_one,
        address_two: user.address_two,
      }
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <h5 className="p-0">Agregar un nuevo cliente</h5>
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-link text-danger btn-cancel"
          >
            Cancelar
          </button>
          <button onClick={handleSubmit} className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
      <div className="bg-white rounded dashed-border p-4">
        <div className="row">
          <label className="my-2 text-primary">
            1. Informacion del Cliente
          </label>
          <div>
            <div className="row">
              <div className="col-md-6">
                <label>Nombres</label>
                <input
                  onChange={handleInputChange}
                  name="name"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Numero de DNI</label>
                <input
                  onChange={handleInputChange}
                  name="dni"
                  type="number"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Apellido paterno</label>
                <input
                  onChange={handleInputChange}
                  name="first_lastname"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Apellido materno</label>
                <input
                  onChange={handleInputChange}
                  name="second_lastname"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Numero de Telefono #1</label>
                <input
                  onChange={handleInputChange}
                  name="phone_one"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>
                  Numero de Telefono #2
                  <p className="text-black-50">(optional)</p>
                </label>
                <input
                  onChange={handleInputChange}
                  name="phone_two"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Email #1</label>
                <input
                  onChange={handleInputChange}
                  name="email_one"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>
                  Email #2<p className="text-black-50">(optional)</p>
                </label>
                <input
                  onChange={handleInputChange}
                  name="email_two"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Address #1</label>
                <input
                  onChange={handleInputChange}
                  name="address_one"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>
                  Adress #2<p className="text-black-50">(optional)</p>
                </label>
                <input
                  onChange={handleInputChange}
                  name="address_two"
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label className="">Customer Photo</label>
                <br />
                <input
                  onChange={handleInputChange}
                  name="profile_picture"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClient;
