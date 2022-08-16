import React from "react";

const WidgetContainer = ({ children, title }) => {
  return (
    <div className="rounded bg-white p-3 shadow-sm">
      <div className="mb-3">
        <h6 className="fw-bold">{title}</h6>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default WidgetContainer;
