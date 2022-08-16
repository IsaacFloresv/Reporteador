import React from "react";

const TasksWidget = () => {
  return (
    <>
      <div
        className="rounded shadow-sm p-2 mb-3"
        style={{ backgroundColor: "#EFF7EF" }}
      >
        <p className="mb-0">
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            aspernatur magni nulla beatae distinctio, dicta quibusdam excepturi.
            Incidunt at quas possimus esse illo architecto, dicta facilis
            officia commodi quaerat dolorum laudantium id exercitationem est
            minima corporis ut deserunt ipsam? Quaerat.
          </small>
        </p>
        <p
          className="m-0 text-end text-muted"
          style={{ fontSize: 0.7 + "rem" }}
        >
          Creado: 17/08/2022
        </p>
      </div>
    </>
  );
};

export default TasksWidget;
