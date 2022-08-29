import React from "react";

const Alert = ({ color, children }) => {
  return (
    <>
      <div className="w-100">
        <div class={`alert alert-${color} mt-2 text-center`} role="alert">
          {children}
        </div>
      </div>
    </>
  );
};

export default Alert;
