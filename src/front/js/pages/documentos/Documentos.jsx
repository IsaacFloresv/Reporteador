import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext.js";
// wiggets
import Search_documents from "../../components/search-documents/Search-documents.jsx";
import Card_documents from "../../components/card-documents/Card-documents.jsx";
import Card_folders from "../../components/card-folders/Card-folders.jsx";


const Documentos = () => {

  const { actions, store } = useContext(Context);
  const [folders, setfolders] = useState(store.clients);
  const [documents, setDocuments] = useState(store.docs);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    setfolders(store.clients);
  }, [store.clients]);

  useEffect(() => {
    setDocuments(store.docs);
  }, [store.docs]);
  useEffect(() => {
    const docsFilter = store.docs.filter((value) =>
      value.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDocuments(docsFilter);
  }, [searchValue]);
  const fetchApi = () => {
    actions.AllFiles()
  }
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Render
  return (
    <>
      {/* Complemets */}
      {/* Left Columns */}
      <form>
        <div className="form-online">
          <div className="form-group">
            <input type="text" className="form-control" id="Document_id" placeholder="Escriba para buscar." onChange={(e) => setsearchValue(e.target.value)}>
            </input>
          </div>
        </div>
      </form>
      <div className="Container">
        <div class="row pt-2 mt-4">
          <h5 className="col ">
            Agregados recientemente
          </h5>
          {/*<p className="col d-md-flex justify-content-md-end">
            <a href="#">ver todos</a>
          </p>*/}
        </div>
        <div className="container-fluid align-items-center p-2 m-0">
          <div
            className="row"
          // style={{ height: 300 }}
          >
            {documents.map((item, index) => {
              return (
                <div className="col-4 p-1 m-0">
                  <div key={index}>
                    <Card_documents
                      name={item.name}
                      url={item.url}
                      edited={item.created}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Container-fluid pt-2">
        <div class="row pt-2 mb-2">
          <h5 className="col text-left">
            Mis carpetas
          </h5>
          {/*<p className="col d-md-flex justify-content-md-end">
            <a href="#">ver todos</a>
          </p>*/}
        </div>
        <div
          className="d-flex"
          style={{ width: 100 + "%", overflowX: "scroll" }}
        >
          {folders.map((item, index) => {
            return (
              <div className="col-4">
                <div key={index}>
                  <Card_folders
                    name={item.first_lastname}
                    cant={store.docs.length}
                    client={item.name}
                    index={index}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Documentos;
