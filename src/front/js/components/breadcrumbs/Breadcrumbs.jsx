import React from "react";

const Breadcrumbs = ({ page }) => {
  return (
    <>
      <p className="mb-5" style={{ fontSize: 0.75 + "rem" }}>
        <span className="text-muted">Dropcases</span> / <b>{page}</b>
      </p>
    </>
  );
};

export default Breadcrumbs;
