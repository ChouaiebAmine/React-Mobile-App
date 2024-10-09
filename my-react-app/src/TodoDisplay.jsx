import React from "react";
import Todoitem from './todoitem';

function Tododisplay({todos,deleteTodo,toggletodo,updatetodo}){

    return(
        <ul>
            {todos.map(todo =>
                <Todoitem
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