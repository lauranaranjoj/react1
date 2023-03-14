import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm()
{
    console.log("Render TodoForm");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newValue, setNewValue] = React.useState('');
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) =>{
        event.preventDefault();        
        addTodo(newValue);
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewValue(event.target.value);
    };
    

    return(
        <form onSubmit={onAdd}>
            <label>Ingresa un valor para la nueva tarea:</label>
            <textarea value={newValue} onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };