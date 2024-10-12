import react from 'react'
import { useState } from 'react'


function Add({AddTodo}){
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("")

    const Submit = (e) => {
        e.preventDefault();
        AddTodo({title,body});
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={Submit}>
            <input
                type ='text'
                placeholder='Title'
                value ={title}
                onChange ={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder='description'
                value = {body}
                onChange= {(e) => setBody(e.target.value)}
                required
            />
            <button type = "submit">Add</button>
        </form>
    );

}
export default Add;