import React from "react";

// Icons
import { GiTakeMyMoney } from "react-icons/gi";

const Notifications = () => {
  return (
    <>
      <div className="mb-2 d-flex justify-content-between">
        {/* Left */}
        <div className="d-flex">
          <div
            className="d-flex justify-content-center align-items-center rounded p-2"
            style={{ backgroundColor: "#DEF6E5"}}
          >
              <GiTakeMyMoney color="#82CF98" size={30} />
          </div>
          <div className="d-flex align-items-center">
            <div className="mx-2">
              <p className="m-0" style={{ fontSize: 0.9 + "rem" }}>
                Haz recibido 1 pago de{" "}
                <span className="fw-semibold">Daniel Romero</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0 mb-3" style={{ color: "#D6D6D6" }} />
    </>
  );
};

export default Notifications;
