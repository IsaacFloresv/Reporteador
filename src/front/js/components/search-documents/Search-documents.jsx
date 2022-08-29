import React from "react";

const Search_documents = () => {
  return (
        <>
            <form>
                <div className="form-online">
                    <div className="form-group">
                        <input type="text" className="form-control" id="Document_id" placeholder="Escriba para buscar.">
                        </input>
                    </div>
                </div>    
            </form>
        </>
    );
};

export default Search_documents;