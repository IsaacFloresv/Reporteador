import React from "react";
import { GrDocumentUpload } from "react-icons/gr/index";
import { useNavigate } from "react-router-dom";

const NewClient = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <h5 className="p-0">Agregar nuevos clientes</h5>
        </div>
        <div>
        
          <button onClick={() => navigate(-1)} className="btn btn-link text-danger btn-cancel">
            Cancel
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
      <div className="bg-white rounded dashed-border p-4">
        <div className="row">
          <label className="my-2 text-primary">1.Customer Info</label>
          <div>
            <div className="row">
              <div className="col-md-6">
                <label>Names</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>DNI Number</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>Phone number #1</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>
                  Phone number #2
                  <text className="text-black-50">(optional)</text>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
                <text className="float-end text-primary">
                  + Add more phone numbers
                </text>
              </div>
              <div className="col-md-6">
                <label>Email #1</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>
                  Email #2<text className="text-black-50">(optional)</text>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
                <text className="float-end text-primary">
                  + Add more emails
                </text>
              </div>
              <div className="col-md-6">
                <label>Address #1</label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
              </div>
              <div className="col-md-6">
                <label>
                  Adress #2<text className="text-black-50">(optional)</text>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Proceeding"
                />
                <text className="float-end text-primary">
                  + Add more phone addresses
                </text>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label className="">Customer Photo</label>
                <div className="dashed-border-upload form-control text-center upload-bg">
                  <GrDocumentUpload />
                  <div>Drag and drop your file</div>
                  <div>Max-size 1Mb</div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="">DNI</label>
                <div className="dashed-border-upload form-control text-center upload-bg">
                  <GrDocumentUpload />
                  <div>Drag and drop your file</div>
                  <div>Max-size 1Mb</div>
                </div>
              </div>
            </div>
            <hr />
            <label className="text-primary">2. Case Info</label>
            <div className="d-flex ">
              <button className="btn btn-link text-dark fw-bold">
                Assign to existing case
              </button>
              <label className="text-dark fw-light">O</label>
              <button className="btn btn-link text-dark fw-bold">
                Create a new case
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClient;
