//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Router from "./router";

//render your react application
ReactDOM.render(<Router />, document.querySelector("#app"));
