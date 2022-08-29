import React, { useState } from "react";
import login_image from "../../../../../public/assets/login-image.png";
import SendCode from "../../components/Login/SendCode.jsx";
import NewPassword from "../../components/Login/NewPassword.jsx";
import LoginForm from "../../components/Login/LoginForm.jsx";
import VerificationCode from "../../components/Login/VerificationCode.jsx";

const Login = () => {
  console.log("login");

  const [stage, setstage] = useState("login");

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
        {console.log(stage)}
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
