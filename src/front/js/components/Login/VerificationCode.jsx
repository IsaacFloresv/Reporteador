import React, { useContext, useState,useEffect } from "react";
import { Context } from "../../store/appContext.js";
import logo from "../../../../../public/assets/logo.png";
import { validateCode } from "../ValidateErrors/Errors.jsx";
import Alert from "../Alert/Alert.jsx";

const VerificationCode = ({ setStage }) => {
  const { actions, store } = useContext(Context);
  const [codes, setCodes] = useState({ code: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setCodes({
      ...codes,
      [target.name]: target.value,
    });
  };
  const handleSubmit =(e) => {
    e.preventDefault();
    const errores = validateCode({ code: codes.code });
    setErrors(errores);
    if (Object.keys(errores).length === 0) {
      actions.verificationCode({ code: codes.code });
    }

  };
  useEffect(() => {
    if (store.status) {
      setStage("NewPassword")
    }
    actions.clearStatus();
  }, [store.status]);

  return (
    <div className="col-12 col-md-7 p-0 vh-100" style={{ overflow: "hidden" }}>
    <div className="h-100 d-flex align-items-center">
    <form
      className="w-100 needs-validation"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="container-fluid">
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
          <div className="col-xxl-12 py-2">
            <label
              htmlFor="validationCustom01"
              className="form-label px-0 mb-0"
            >
              Codigo de verificación
            </label>
            <input
              name="code"
              className="form-control"
              id="validationCustom01"
              placeholder=""
              onChange={(e) => handleChange(e)}
            />{" "}
            {errors.code && <p className="text-danger"> {errors.code}</p>}
        {store.showError ? (
            <p className="text-danger">Codigo Invalido</p>
            ) : (
              ''
            )}
            <div className="valid-feedback">Looks good!</div>
            <div className="d-flex justify-content-between">
              <div className="col-3 my-2">
                <button className="btn btn-primary" type="submit">
                  Nueva Contraseña
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  </div>
  );
};
export default VerificationCode;
