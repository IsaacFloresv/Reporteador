import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import DashboardLayouts from "./layouts/DashboardLayout.jsx";

//create your first component
const Router = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <DashboardLayouts>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route element={<Dashboard />} path="/" />
          </Routes>
        </BrowserRouter>
      </DashboardLayouts>
    </div>
  );
};

export default injectContext(Router);
