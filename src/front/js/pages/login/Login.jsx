import React from "react";
import login_image from "/workspace/dropcases/public/assets/login-image.png";
import logo from "/workspace/dropcases/public/assets/logo.png";
import {BiLockAlt} from "react-icons/bi"
const Login = () => {
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
          class="col-12 col-xl-7  d-flex align-items-center needs-validation  "
          novalidate
        >
          <div className="container">
            <div className="w-75 m-auto">
              <div className="col-6 text-center mx-auto ">
                <img
                  classname="text-center"
                  style={{ width: 100 + "%" }}
                  src={logo}
                />
              </div>
              <div class="col-xxl-12 py-2">
                <label for="validationCustom01" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="email "
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-xxl-12">
                <label for="validationCustom02" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="password"
                  value=""
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="align-items-center d-flex justify-content-between py-2">
                <div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" for="invalidCheck">
                      Recordar cuenta
                    </label>
                  </div>
                </div>
                <div>
                  <button className="btn btn-link ">
                    <span className="mx-2"><BiLockAlt/></span>Olvide mi contraseña
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
