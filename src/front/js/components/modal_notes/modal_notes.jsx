import React, { useContext, useRef } from "react";
import { Context } from "../../store/appContext";

const Modal_notes = () => {
  const { store, actions } = useContext(Context);
  const formData = useRef("");
  const handleSubmit = () => {
    actions.saveNote(formData.current.value);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Crea una nueva tarea
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              ref={formData}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary mx-auto mt-2"
              data-bs-dismiss="modal"
            >
              Guardar Nota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_notes;
