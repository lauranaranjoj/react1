import React from "react"
import './TodosLoading.css'
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodosLoading()
{
    return(
        <ul>
            {new Array(5).fill(1).map((a, i) => 
                        <li className="TodoItemLoading" key={i}>
                            <CompleteIcon completed={false} />
                            <p className="TodoItem-p">
                                Cargando...
                            </p>
                            <DeleteIcon />
                        </li>)}

        </ul>
    );
}

export { TodosLoading };