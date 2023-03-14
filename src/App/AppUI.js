import React from "react";
import { TodoContext } from "../TodoContext"; 
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosLoading } from "../TodosLoading";

function AppUI()
{
    console.log("Render AppUI");
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      totalTodos,
      searchValue,
      openModal
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Ha ocurrido un error</p>}
          {loading &&  <TodosLoading/>}
          {(!loading && !totalTodos) && <p>Crea tu primera tarea</p>}
          {(!loading && totalTodos>0 && searchValue && !searchedTodos.length) && <p>No se encontraron resultados</p>}

          {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete = {() =>completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)} />
          ))}
        </TodoList>
        {
          openModal &&(
            <Modal>             
              <TodoForm />
            </Modal>
          )
        }

        <CreateTodoButton/>
      </React.Fragment>
    );
}

export { AppUI };