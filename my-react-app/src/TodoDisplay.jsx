import React from "react";
import Todoitem from './todoitem';

function Tododisplay({todos,deleteTodo,toggletodo,updatetodo,changeposUp,changeposDown}){

    return(
        <ul>
            {todos.map((todo,index) =>
                <Todoitem
                    key = {todo.id}
                    todo = {todo}
                    todoslength={todos.length}
                    index = {index}
                    deleteTodo = {deleteTodo}
                    toggletodo = {toggletodo}
                    updatetodo = {updatetodo}
                    changeposUp = {changeposUp}
                    changeposDown = {changeposDown}
                />
            )}
        </ul>
    )
}

export default Tododisplay;