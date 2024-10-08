import react from 'react'
import { useState } from 'react'


function Add({AddTodo}){
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("")

    const Submit = (e) => {
        AddTodo({title,body});
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={Submit}>
            <input
                type ='text'
                placeholder='Title'
                value ='Title'
                onChange ={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder='description'
                value = 'body'
                onChange= {(e) => setBody(e.target.value)}
                required
            />
            <button type = "submit">Add Todo</button>
        </form>
    );

}
export default Add;