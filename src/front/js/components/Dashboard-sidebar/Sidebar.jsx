import React from "react";

// Import Logo
import logo from "../../../../../public/assets/logo.png";

// Import icons
import { MdOutlineDashboard } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";

const Sidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard height={20} className="mt-2" />,
    },
    {
      name: "Mis Tareas",
      icon: <GrTask height={20} className="mt-2" />,
    },
    {
      name: "Clientes",
      icon: <TbUsers height={20} className="mt-2" />,
    },
    {
      name: "Casos",
      icon: <HiOutlineBriefcase height={20} className="mt-2" />,
    },
    {
      name: "Documentos",
      icon: <IoDocumentTextOutline height={20} className="mt-2" />,
    },
    {
      name: "Automatizacion",
      icon: <BsChatRightText height={20} className="mt-2" />,
    },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 px-3 py-2"
      style={{ width: 280 + "px", height: 100 + "vh" }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className="mb-3 mt-1"
          style={{ width: 55 + "%" }}
        />
      </div>

      {/* Menu */}
      <ul className="nav flex-column mb-auto px-3 mt-2">
        {menu.map((link, index) => {
          return (
            <div key={index} className="py-3 d-flex align-content-center">
              {link.icon}
              <li className="mx-2 fw-normal" style={{ marginTop: 5 + "px" }}>
                {link.name}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
