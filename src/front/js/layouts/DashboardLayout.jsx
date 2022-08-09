import React from "react";

// Components
import Navbar from "../components/Dashboard-top-nav-bar/Navbar.jsx";
import Sidebar from "../components/Dashboard-sidebar/Sidebar.jsx";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <div className="d-none d-md-none d-lg-block ">
          <Sidebar />
        </div>
        <div className="w-100 bg-light">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
