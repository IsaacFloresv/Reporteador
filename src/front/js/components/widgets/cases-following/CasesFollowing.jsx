import React from "react";

const CasesFollowing = () => {
  return (
    <>
      <div className="mb-2 d-flex justify-content-between">
        {/* Left */}
        <div className="d-flex">
          <div style={{ width: 45 }}>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="rounded"
              style={{
                width: 45,
                height: 45,
                objectFit: "cover",
              }}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="mx-2">
              <p className="m-0 fw-bold lh-1">Demanda por difamacion</p>
              <span style={{ fontSize: 0.75 + "rem", marginTop: -50 }}>
                Cliente: Juan de las nieves
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="mx-2 text-end">
          <span className="badge text-bg-primary fw-normal text-white">
            Activo
          </span>
          <p
            className="m-0 py-1 fw-semibold"
            style={{ fontSize: 0.75 + "rem" }}
          >
            Ver Caso →{" "}
          </p>
        </div>
      </div>
      <hr className="m-0 mb-3" style={{ color: "#D6D6D6" }} />
    </>
  );
};

export default CasesFollowing;
