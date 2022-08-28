import React, { useContext } from "react";
// Icons
import { IoNotificationsOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { FcMenu } from "react-icons/fc";
import { MdLogout } from "react-icons/md";

// Components
import Notifications from "../../components/widgets/notifications/Notifications.jsx";
import { Context } from "../../store/appContext.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const { store, actions } = useContext(Context);
  const handleLogout = () => {
    actions.logout();
    navigate(0);
  };

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
              className="dropdown-menu p-3 mt-3 border-0 shadow"
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
        <div className="btn d-flex align-items-center px-4">
          <img
            src="https://cdn2.vectorstock.com/i/thumb-large/86/26/person-gray-photo-placeholder-man-material-design-vector-23838626.jpg"
            alt="profile-picture"
            className="rounded"
            style={{
              width: 35,
              height: 35,
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          <div class="dropdown">
            <h6
              className="px-3 my-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {store.user.name}
              <span className="dropdown-toggle mx-2"></span>
            </h6>
            <ul class="dropdown-menu border-0 shadow mt-3">
              <li onClick={() => handleLogout()}>
                <span class="dropdown-item">
                  <MdLogout
                    size={15}
                    className="me-2"
                    style={{ marginTop: -5 }}
                  />
                  Cerrar Session
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
