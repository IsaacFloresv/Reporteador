import React from "react";

const PaymentWidget = ({color}) => {
  return (
    <div className="rounded p-2 my-2" style={{backgroundColor: color}}>
      <div className="d-flex justify-content-between">
        <span>Factura: #302</span>
        <span>Fecha: 24/08/2022</span>
      </div>
      <div className="d-flex justify-content-between">
        <h6 className="mb-0">$1,000.00</h6>
        <span className="text-muted">
          <small>Honorarios profesionales</small>
        </span>
      </div>
    </div>
  );
};

export default PaymentWidget;
