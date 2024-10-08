import react,{useState} from 'react'

function todoitem({todo,deleteTodo,toggletodo,updatetodo}){

    const [isediting, setisediting] = useState(false);
    const [newtitle,setnewtitle] = useState(todo.title);
    const [newbody,setnewbody]= useState(todo.body)

    const update = () => {
        update(todo.id,{title:newtitle,body:newbody});
        setisediting(false);
    };
    
}
