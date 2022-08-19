import React from "react";
import { GrDocumentUpload } from "react-icons/gr/index";

const NewCase = () => {
  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <div>
          <label className="p-0">Add new case</label>
        </div>
        <div>
          <button className="btn btn-link text-danger text-decoration-none btn-cancel">
            Cancel
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
      <div className="bg-white rounded dashed-border p-4 vh-100">
        <div className="row">
          <label className="my-2 text-primary">1.Case Info</label>
          <div>
            <div className="row">
              <div className="col-12">
                <label>Case name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label>Proceedings Number</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Customer</label>
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    defaultValue={1}
                  >
                    <option value="1">Customer 1</option>
                    <option value="2">Customer 2</option>
                    <option value="3">Customer ...</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="py-0">
                  Cost<label>(Optional)</label>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="U$"
                  aria-label="Username"
                />
              </div>
              <div className="col-md-6">
                <label className="">Initial Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <hr />
            <div className="">
              <label className="text-primary">2. Primera Actualizacion</label>
              <div className="">
                <label className="">Description</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows={4}
                ></textarea>
                <label className="">Attach file</label>
                <div className="dashed-border-upload form-control text-center upload-bg">
                  <GrDocumentUpload />
                  <div>Drag and drop your file </div>
                  <div>Max-size 1Mb</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary new-case-btn my-1">
                Add a new case update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCase;
