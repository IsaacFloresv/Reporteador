import React from "react";
import ctaBackground from "../../../../../public/assets/cta-image.png";

const CtaUpgrade = () => {
  return (
    <div className="row my-5">
      <div
        style={{
          backgroundImage: `url(${ctaBackground})`,
          width: 100 + "%",
          height: 290,
          backgroundSize: "cover",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="text-wrap ps-4"
          style={{ width: 38 + "rem", paddingTop: 4.2 + "rem" }}
        >
          <h3>
            Gestiona todos tus documentos y casos en un solo lugar, cuando
            quieras.
          </h3>
          <p>Mejora tu plan para obtener cientos de beneficios mas</p>
          <button className="btn btn-dark btn-sm">Ver Beneficios →</button>
        </div>
      </div>
    </div>
  );
};

export default CtaUpgrade;
