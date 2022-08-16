import React from "react";
// Icons
import { IoNotificationsOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { FcMenu } from "react-icons/fc";

// Components
import Notifications from "../../components/widgets/notifications/Notifications.jsx";

const Navbar = () => {
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "white", height: 60 + "px" }}
    >
      {/* Responsive Menu Buttom */}
      <div className="d-none d-xl-block" />
      <button
        className="navbar-toggler mx-3 d-block d-xl-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <FcMenu size={25} />
      </button>

      <div className="d-flex align-items-center">
        {/* Help Icon */}
        <div className="d-none d-xl-block px-4 border-start border-end d-flex align-items-center">
          <IoHelpBuoyOutline size={22} />
        </div>

        {/* Notification Icon */}
        <div className="dropdown-center" style={{ cursor: "pointer" }}>
          <div
            className="px-4 border-end h-100 d-flex align-items-center"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IoNotificationsOutline size={22} />
            <span
              className="fw-normal position-absolute translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center px-1"
              style={{ height: 15 }}
            >
              5
            </span>

            {/* Dropdown menu */}
            <div
              className="dropdown-menu p-3 mt-2 border-0 shadow"
              style={{ width: 300, height: 400, overflowY: "scroll" }}
            >
              {test.map((item, index) => {
                return (
                  <div key={index}>
                    <Notifications />
                  </div>
                );
              })}
              <button className="w-100 btn btn-primary btn-sm">
                Cargar mas
              </button>
            </div>
          </div>
        </div>

        {/* User profile */}
        <div className="btn d-flex align-items-center dropdown-toggle px-4">
          <img
            src="https://images.unsplash.com/photo-1571844306146-6f7451d80824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
            alt="profile-picture"
            className="rounded"
            style={{
              width: 35,
              height: 35,
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          <h6 className="px-3 my-0">Alexandra Irene</h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
