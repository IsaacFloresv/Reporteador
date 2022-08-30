import React from "react";

const TasksWidget = (data,date) => {
  return (
    <>
      <div
        className="rounded shadow-sm p-2 mb-3"
        style={{ backgroundColor: "#EFF7EF" }}
      >
        <p className="mb-0">
          <small>
            {data}
          </small>
        </p>
        <p
          className="m-0 text-end text-muted"
          style={{ fontSize: 0.7 + "rem" }}
        >
          Creado: {date}
        </p>
      </div>
    </>
  );
};

export default TasksWidget;
