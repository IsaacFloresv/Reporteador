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
    if (Object.keys(errores).length === 0) {
      let forgot = await actions.forgotPassword({ email: mail.email });
      if (store.alert.msg == "Email not registered") {
      }
      setErrors(errores);
      setStage("Verification");
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
              Correo electronico del usuario
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="validationCustom01"
              placeholder="email "
              required
              onChange={(e) => handleChange(e)}
            />{" "}
            {errors.email && <p> {errors.email}</p>}
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
                <button className="btn btn-primary col-12" type="submit">
                  Generar codigo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SendCode;
