import React from "react";
import todoitem from 'TodoItem';

function Tododisplay({todos,deleteTodo,toggletodo,updatetodo}){

    return(
        <ul>
            {todos.map(todo =>
                <todoitem
                    key = {todo.id}
                    todo = {todo}
                    deleteTodo = {deleteTodo}
                    toggletodo = {toggletodo}
                    updatetodo = {updatetodo}
                />
            )}
        </ul>
    )
}

export default Tododisplay;