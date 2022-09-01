import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { Context } from "../../../store/appContext";

const TasksWidget = ({ data, index }) => {
  const { actions } = useContext(Context);
  const handleDelete = () => {
    actions.deleteNote(index);
  };
  return (
    <>
      <div
        className="rounded shadow-sm p-2 mb-3 d-flex justify-content-between"
        style={{ backgroundColor: "#EFF7EF" }}
      >
        <p className="mb-0">
          <small>{data}</small>
        </p>
        <div onClick={handleDelete} style={{ cursor: "pointer" }}>
          <BsTrash size={15} className="link" />
        </div>
      </div>
    </>
  );
};

export default TasksWidget;
