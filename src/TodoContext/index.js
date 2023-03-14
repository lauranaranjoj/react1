import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    console.log("Render TodoProvider");
    const{
        items:todos, 
        saveItems: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setsearchValue] = React.useState(''); 
    const [openModal, setOpenModal] = React.useState(false); 
    
    const completedTodos = todos.filter(x => x.completed === true).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1){    
        searchedTodos = todos;
    }
    else{
        searchedTodos = todos.filter(x => {
        const todoText = x.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(x => x.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(x => x.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setsearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>            
            {props.children}
        </TodoContext.Provider>

    );
}

export { TodoContext, TodoProvider };