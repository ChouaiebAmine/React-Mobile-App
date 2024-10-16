import react,{useState} from 'react'

function todoitem({todo,index,todoslength,deleteTodo,toggletodo,updatetodo,changeposUp,changeposDown}){

    const [IsEditing, setisediting] = useState(false);
    const [newtitle,setnewtitle] = useState(todo.title);
    const [newbody,setnewbody]= useState(todo.body)
    

    const update = () => {
        updatetodo(todo.id,{title:newtitle,body:newbody});
        setisediting(false);
    };

    return(
        <li>
            {IsEditing ?(
                <>
                    <input
                        type ="text"
                        value={newtitle}
                        onChange={(e) => setnewtitle(e.target.value)}
                    />
                    <input
                        value ={newbody}
                        onChange = {(e) => setnewbody(e.target.value)}
                    />
                    <button onClick={update}>Save</button>
                </>
            ) : (
                <>
                    <h2 style ={{ textDecoration: todo.done ?"line-through" : "none"}}>
                        {todo.title}
                    </h2>
                    <p>{todo.body}</p>
                    <button onClick={() =>toggletodo(todo.id)}>
                        {todo.done ? "Undo" :"Done"}
                    </button>
                    <button onClick={()=>setisediting(true)}>Edit</button>
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>

                    <button onClick={()=>changeposUp(index)} disabled = {index === 0}>Up</button>
                    <button onClick={()=> changeposDown(index)} disabled = {index === todoslength }>Down</button>
                </>
            )}
        </li>
    );

}

export default todoitem;