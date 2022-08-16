import React from "react";

import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";

const NumbersChart = ({ cant, difference, type, time, style }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <div className="d-flex align-items-center">
            <h3 className="m-0">{cant}</h3>
            <span
              className={`${style === 'negative' ? 'text-danger' : 'text-primary'} fw-semibold mx-3`}
              style={{ fontSize: 0.75 + "rem" }}
            >
              {difference}
            </span>
          </div>
          <div>
            <small className="text-muted fw-medium">
              {type} de los últimos {time} dias
            </small>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {style === "negative" ? (
            <span
              className="p-2 text-danger rounded  me-4"
              style={{ backgroundColor: "#FFB7B7" }}
            >
              <IoTrendingDownSharp size={25} />
            </span>
          ) : (
            <span
              className="p-2 text-primary rounded  me-4"
              style={{ backgroundColor: "#DEF6E5" }}
            >
              <IoTrendingUpSharp size={25} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default NumbersChart;
