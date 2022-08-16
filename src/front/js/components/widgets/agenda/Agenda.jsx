import React from "react";

const Agenda = ({ month, day, timeStart, timeEnd, description, showDay, index }) => {
  return (
    <div className="d-flex mb-2">
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ width: 10 + "%" }}
      >
        {showDay ? (
          <>
            <p className="m-0">{month}</p>
            <p className="m-0 fw-semibold">{day}</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div
        style={{ width: 90 + "%", backgroundColor: index === 0 ? '#DEF6E5' : 'white' }}
        className="border rounded p-3 d-flex flex-column justify-content-center"
      >
        <p className="m-0 fw-semibold">{description}</p>
        <p className="m-0 text-muted">
          <small>
            {timeStart} to {timeEnd}{" "}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Agenda;
