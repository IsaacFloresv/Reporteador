import React, { useContext, useState } from "react";
import defpreview from "../../../../../public/assets/Image.png";
import { MdFileDownload } from "react-icons/md";
import { Context } from "../../store/appContext.js";
import {saveAs} from "file-saver"



const Card_documents = ({ name, edited, index,url }) => {
  const { actions,store} = useContext(Context);

  const handleDelete = () => {
    actions.updateFile(index)
  }
  const handleDownload = () => {
   let singlefile=actions.getFile(index)
   saveAs(
    singlefile.url,singlefile.name
  );
  }
 

  return (
    <div className="card text-left" >
      <div className="card-body btn-link">
        <img class=" card-img-top w-100" alt={defpreview} src={url} />
      </div>
      <div className="card-footer text-muted pb-0 mb-0">

        <p className="pb-0 mb-0">{name}</p>
        <p className="p-0 m-0">Editado {edited}</p>
        <div class="dropdown d-md-flex justify-content-md-end ">
          <button
            class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            ...
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" name="delete" href="#" onClick={()=>handleDelete()}>
              Eliminar
            </a>
            <div className="dropdown-divider" ></div>
            <div
              className="btn btn-link pe-0 "onClick={()=>handleDownload()}>
              <span className="">
                <MdFileDownload />
              </span>
              Download
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_documents;
