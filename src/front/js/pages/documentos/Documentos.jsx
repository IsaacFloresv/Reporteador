import React from "react";

// wiggets
import Search_documents from "../../components/search-documents/Search-documents.jsx";
import Card_documents from "../../components/card-documents/Card-documents.jsx";
import Card_folders from "../../components/card-folders/Card-folders.jsx";

// images
import WidgetContainer from "../../components/widgets/widget-container/WidgetContainer.jsx";

//data
const documents = [
  {
    name: "Prueba 1.png",
    caso: "Difamación",
    edited: "10/05/2022",
  },
  {
    name: "Juramento.jpg",
    caso: "Estafa",
    edited: "01/03/2020",
  },
  {
    name: "Testimonio.pdf",
    caso: "Hurto",
    edited: "09/07/2012",
  },
];

const folders = [
  {
    name: "Documentos de la empresa",
    cant: 24,
    client: "Bufette",
    edited: "10/05/2022",
  },
  {
    name: "Belinda",
    cant: 25,
    client: "Belinda",
    edited: "01/03/2020",
  },
  {
    name: "Homero Simpson",
    cant: 15,
    client: "Homero Simpson",
    edited: "09/07/2012",
  },
];

const Documentos = () => {
  const test = [];

  // Render
  return (
    <>
      {/* Complemets */}
      {/* Left Columns */}
      <Search_documents />
      <div classname="Container">
        <div class="row pt-2">
          <p className="col">
            <b> Agregados recientemente</b>
          </p>
          <p className="col d-md-flex justify-content-md-end">
            <a href="#">ver todos</a>
          </p>
        </div>
        <div className="container align-items-center p-2 m-0">
          <div
            className="row "
            style={{ height: 300, width: 100 + "%", overflowy: "scroll" }}
          >
            {documents.map((item, index) => {
              return (
                <div className="col-4 p-1 m-0">
                  <div key={index}>
                    <Card_documents
                      name={item.name}
                      caso={item.caso}
                      edited={item.edited}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Container pt-2">
      <div class="row pt-2">
        <p className="col text-left">
            <b> Mis carpetas</b>
          </p>        
          <p className="col d-md-flex justify-content-md-end">
            <a href="#">ver todos</a>
          </p>
          </div>
        <div
          className="row"
          style={{ height: 300, width: 100 + "%", overflowy: "scroll" }}
        >
          {folders.map((item, index) => {
            return (
              <div className="col-4">
                <div key={index}>
                  <Card_folders
                    name={item.name}
                    cant={item.cant}
                    client={item.client}
                    edited={item.edited}
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
