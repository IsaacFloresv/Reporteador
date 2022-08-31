import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import logo from "../../../../../public/assets/logo.png";
import { validateEmail } from "../ValidateErrors/Errors.jsx";

const SendCode = ({ setStage }) => {
  const { actions, store } = useContext(Context);
  const [mail, setMail] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setMail({
      ...mail,
      [target.name]: target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errores = validateEmail({ email: mail.email });
    setErrors(errores);
    if (Object.keys(errores).length === 0) {
      let forgot = await actions.forgotPassword({ email: mail.email });
      if (store.alert.msg == "Email not registered") {
      }
      setErrors(errores);
      setStage("Verification");
    }
  };
  return (
    <div className="col-12 col-md-7 p-0 vh-100" style={{ overflow: "hidden" }}>
    <div className="h-100 d-flex align-items-center">
    <form
       className="w-100 needs-validation"
       style={{ marginTop: -20 }}
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
              Correo electronico del usuario
            </label>
            <input
              name="email"
              className="form-control"
              id="validationCustom01"
              placeholder="email "
              onChange={(e) => handleChange(e)}
            />{" "}
            {errors.email && <p className="text-danger"> {errors.email}</p>}
            <div className="valid-feedback">Looks good!</div>
            <div className="d-flex justify-content-between">
              <div className="col-3">
                <button
                  className="btn btn-link pe-0 "
                  onClick={() => setStage("login")}
                >
                  <span className=""></span>
                  Back to login
                </button>
              </div>
              <div className="col-3 my-2">
                <button className="btn btn-primary" type="submit">
                  Generar codigo
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
export default SendCode;
