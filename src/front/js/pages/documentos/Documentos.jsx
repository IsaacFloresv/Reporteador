import React from "react";

const Documentos = () => {
  return(
    <div>
      <form action="/uploader" method="POST" enctype="multipart/form-data">
        <label for="usuario">Usuario</label>
        <input type="text" name="usuario"/>
        <input type="file" name="archivo"></input>
        <input type="submit"></input>
      </form>
    </div>
   );
};

export default Documentos;
