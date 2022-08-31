import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import logo from "../../../../../public/assets/logo.png";
import { validateCode } from "../ValidateErrors/Errors.jsx";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errores = validateCode({ code: codes.code });
    setErrors(errores);
    if (Object.keys(errores).length === 0) {
      let code = await actions.verificationCode({ code: codes.code });
      if (store.alert.msg == "Wrong Code") {
      }
      //if(data.msg =="Set new password")
      setErrors(errores);
      setStage("NewPassword");
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
            <div className="valid-feedback">Looks good!</div>
            <div className="d-flex justify-content-between">
              <div className="col-3 my-2">
                <button className="btn btn-primary col-12" type="submit">
                  Nueva Contraseña
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default VerificationCode;
