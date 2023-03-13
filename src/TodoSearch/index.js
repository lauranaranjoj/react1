import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch()
{
    const {searchValue, setsearchValue} = React.useContext(TodoContext);

    const onSearchValueChanged = (event) =>{
        console.log(event.target.value);
        setsearchValue(event.target.value);
    };    

    return(
        <input 
            className="TodoSearch" 
            placeholder="Ingresa filtro de búsqueda"
            value={searchValue}
            onChange={onSearchValueChanged}
        />
    );
}

export { TodoSearch };