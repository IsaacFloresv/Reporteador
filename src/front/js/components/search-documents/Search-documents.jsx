import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext.js";

const Search_documents = () => {

    return (
        <>
            <form>
                <div className="form-online">
                    <div className="form-group">
                        <input type="text" className="form-control" id="Document_id" placeholder="Escriba para buscar." onChange={(e) => setsearchValue(e.target.value)}>
                        </input>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Search_documents;