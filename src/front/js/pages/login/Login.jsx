import React, { useState } from "react";
import login_image from "../../../../../public/assets/login-image.png";
import SendCode from "../../components/Login/SendCode.jsx";
import NewPassword from "../../components/Login/NewPassword.jsx";
import LoginForm from "../../components/Login/LoginForm.jsx";
import VerificationCode from "../../components/Login/VerificationCode.jsx";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Login = () => {
  const [stage, setstage] = useState("login");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-3 position-absolute top-0 start-0">
          <Link to="/registro" className="text-white text-decoration-none">
            <p className="text-black fw-semibold">
              <BsArrowLeft />
              <span className="mx-2 "></span>Aun no tengo cuenta,registrarme
            </p>
          </Link>
        </div>
        <div className="col-xl-5 p-0 d-none d-xl-block vh-100">
          <img
            className="img-responsive"
            style={{ objectFit: "cover" }}
            src={login_image}
          />
        </div>
        {stage === "login" ? (
          <LoginForm setStage={setstage} />
        ) : stage === "NewPassword" ? (
          <NewPassword setStage={setstage} />
        ) : stage === "Verification" ? (
          <VerificationCode setStage={setstage} />
        ) : stage === "Send" ? (
          <SendCode setStage={setstage} />
        ) : (
          ""
        )}{" "}
      </div>
    </div>
  );
};
export default Login;
