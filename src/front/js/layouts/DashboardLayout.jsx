import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Dashboard-top-nav-bar/Navbar.jsx";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs.jsx";
import Sidebar from "../components/Dashboard-sidebar/Sidebar.jsx";

const DashboardLayout = () => {
  const auth = JSON.parse(localStorage.getItem("Dropcase")) || false;
  console.log(auth);

  return (
    <>
      {auth.loggedIn === true ? (
        <div className="d-flex vh-100 vw-100" style={{ overflow: "hidden" }}>
          <aside className="d-none d-xl-block ">
            <Sidebar />
          </aside>
          <div className="bg-light w-100">
            <Navbar />
            <div
              className="w-100 h-100"
              style={{ overflowY: "scroll", overflowX: "hidden" }}
            >
              <section className="m-auto mt-5" style={{ width: 85 + "%" }}>
                <Breadcrumbs page="Dashboard" />
                <Outlet />
                <br />
                <br />
                <br />
              </section>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </>
  );
};

export default DashboardLayout;
