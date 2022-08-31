import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import logo from "../../../../../public/assets/logo.png";
import { valPassword } from "../ValidateErrors/Errors.jsx";

const NewPassword = ({ setStage }) => {
  const { actions, store } = useContext(Context);
  const [password, setPassword] = useState({ new_password: "" });
  const [errors, setErrors] = useState({});
  const [validatePassword, setValidatePassword] = useState(null);

  const handleChange = ({ target }) => {
    if (target.name === "verifiedPassword") {
      setValidatePassword(
        target.value === password.new_password ? true : false
      );
    }
    setPassword({
      ...password,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errores = valPassword(
      { new_password: password.new_password },
      validatePassword
    );
    setErrors(errores);
    if (Object.keys(errores).length === 0) {
      let set_password = await actions.newPassword({
        new_password: password.new_password,
      });
      if (store.alert.msg == "Please fill new password") {
      }
      setErrors(errores);
      setStage("login");
    }
  };

  return (
    <form
      className="col-12 col-xl-7  d-flex align-items-center needs-validation"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="container">
        <div className="w-75 m-auto">
          <div className="col-6 text-center mx-auto ">
            <img
              className="text-center"
              style={{
                width: 100 + "%",
              }}
              src={logo}
            />
          </div>
          <div>
            <div className="col-xxl-12 py-2">
              <label
                htmlFor="validationCustom01"
                className="form-label px-0 mb-0"
              >
                Nueva Contraseña
              </label>
              <input
                name="new_password"
                type="password"
                className="form-control"
                id="validationCustom01"
                required
                placeholder="Contraseña "
                onChange={(e) => handleChange(e)}
              />{" "}
              {errors.password && <p className="text-danger"> {errors.password}</p>}
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-xxl-12">
              <label
                htmlFor="validationCustom02"
                className="form-label px-0 mb-0"
              >
                Verificar Contraseña
              </label>
              <input
                name="verifiedPassword"
                type="password"
                className="form-control"
                id="validationCustom02"
                required
                placeholder=" Contraseña"
                onChange={(e) => handleChange(e)}
              />{" "}
              {errors.verifiedPassword && <p className="text-danger"> {errors.verifiedPassword}</p>}
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="align-items-center d-flex justify-content-between py-2"></div>
            <div className="col-12">
              <button className="btn btn-primary col-12" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPassword;
