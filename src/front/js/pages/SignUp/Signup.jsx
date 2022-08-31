import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import { Link } from "react-router-dom";
import logo from "../../../../../public/assets/logo.png";
import register_image from "../../../../../public/assets/register_image.png";
import Alert from "../../components/Alert/Alert.jsx";
import { validateInfo } from "../../components/ValidateErrors/Errors.jsx";

const Signup = () => {
  let navigate = useNavigate();
  const { actions, store } = useContext(Context);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    lawyer_identification: "",
    email: "",
    password: "",
    validatePassword: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInfo({
      name: user.name,
      lastname: user.lastname,
      lawyer_identification: user.lawyer_identification,
      email: user.email,
      password: user.password,
      validatePassword: user.validatePassword
    });
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      actions.register({
        name: user.name,
        lastname: user.lastname,
        lawyer_identification: user.lawyer_identification,
        email: user.email,
        password: user.password,
      });
    }
  };
  useEffect(() => {
    if (store.status) navigate("/login");
    actions.clearStatus();
  }, [store.status]);
  return (
    <div>
      <div className="container-fluid fw-bold">
        <div className="row">
          <form
            className="col-12 col-xl-7 d-flex align-items-center needs-validation"
            noValidate
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="container">
              <div className="w-75 mx-auto">
                {store.showError ? (
                  <Alert color="danger">
                    Este usuario ya existe
                  </Alert>
                ) : (
                  ""
                )}
                <div className="col-5 text-center mx-auto ">
                  <img
                    className="text-center"
                    style={{
                      width: 100 + "%",
                    }}
                    src={logo}
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <label for="validationCustom01" className="form-label m-0">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control my-1"
                      name="name"
                      required
                      onChange={(e) => handleChange(e)}
                    />{" "}
                    {errors.name && (
                      <p className="text-danger"> {errors.name}</p>
                    )}{" "}
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <label className="form-label m-0">Apellido</label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control my-1"
                        name="lastname"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    {" "}
                    {errors.lastname && (
                      <p className="text-danger"> {errors.lastname}</p>
                    )}{" "}
                  </div>
                </div>
                <div className="col-md-12">
                  <label for="validationCustom03" className="form-label m-0">
                    ID de Abogado
                  </label>
                  <input
                    type="text"
                    className="form-control my-1"
                    name="lawyer_identification"
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  {errors.lawyer_identification && (
                    <p className="text-danger">
                      {" "}
                      {errors.lawyer_identification}
                    </p>
                  )}{" "}
                </div>
                <div className="col-md-12">
                  <label for="validationCustom03" className="form-label m-0">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control my-1"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  {errors.email && (
                    <p className="text-danger"> {errors.email}</p>
                  )}{" "}
                </div>
                <div className="col-md-12">
                  <label for="validationCustom02" className="form-label m-0">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control my-1"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    required
                  />{" "}
                  {errors.password && (
                    <p className="text-danger"> {errors.password}</p>
                  )}{" "}
                </div>
                <div className="col-md-12">
                  <label for="validationCustom05" className="form-label m-0">
                    Verificar contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control my-1"
                    name="validatePassword"
                    onChange={(e) => handleChange(e)}
                  />{" "}
                  {errors.validatePassword && (
                    <p className="text-danger"> {errors.validatePassword}</p>
                  )}{" "}
                </div>
                <div className="col-12 py-4">
                  <button className="btn btn-primary col-12" type="submit">
                    Registrar
                  </button>
                </div>
                <div className="text-center">
                  <Link to="/login">
                    <button className="btn text-secondary fs-6">
                      <span className="mx-2"></span>Ya tengo una cuenta,acceder
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xl-5 p-0 d-none d-lg-block vh-100">
            <img
              className="img-responsive "
              style={{ objectFit: "cover" }}
              src={register_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
