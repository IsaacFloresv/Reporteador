import React, { useState } from "react";
import login_image from "/workspace/dropcases/public/assets/login-image.png";
import logo from "/workspace/dropcases/public/assets/logo.png";
import { BiLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const redirect = useNavigate();

  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginData.username === "demo@gmail.com" &&
      loginData.password === "demo"
    ) {
      redirect("/dashboard", { replace: true });
    }
  };

  const handleChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid fw-bold">
      <div className="row">
        <div className="col-xl-5 p-0 d-none d-lg-block vh-100">
          <img
            className="img-responsive"
            style={{ objectFit: "cover" }}
            src={login_image}
          />
        </div>
        <form
          className="col-12 col-xl-7  d-flex align-items-center needs-validation"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="container">
            <div className="w-75 m-auto">
              <div className="col-6 text-center mx-auto ">
                <img
                  className="text-center"
                  style={{ width: 100 + "%" }}
                  src={logo}
                />
              </div>
              <div class="col-xxl-12 py-2">
                <label
                  htmlFor="validationCustom01"
                  class="form-label px-0 mb-0"
                >
                  Correo electronico
                </label>
                <input
                  name="username"
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="email "
                  required
                  onChange={(e) => handleChange(e)}
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-xxl-12">
                <label
                  htmlFor="validationCustom02"
                  class="form-label px-0 mb-0"
                >
                  Contraseña
                </label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="password"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="align-items-center d-flex justify-content-between py-2">
                <div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" />
                    <span className="mx-2">Recordar cuenta</span>
                  </div>
                </div>
                <div>
                  <button className="btn btn-link pe-0 ">
                    <span className="mx-2">
                      <BiLockAlt />
                    </span>
                    Olvide mi contraseña
                  </button>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-primary col-12" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
