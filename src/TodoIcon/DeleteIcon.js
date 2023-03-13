import React from "react";
import { TodoIcon } from "./";

function DeleteIcon({ onDelete })
{
    return(
        <TodoIcon 
          type="delete"
          color="#8C97C7"
          onClick={onDelete}
        />
    );
}

export { DeleteIcon };
