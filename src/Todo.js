import { useState } from "react";
import TodoList from "./todoList";
function Todo(){
    const [Todos,setTodos]=useState([]);
    const [newTodo,setNewTodo]=useState("");
    return (
        
        <div>
            <input type="text" placeholder="Enter new Todo"
             
            onChange={(event) => setNewTodo(event.target.value)}

             /><br/>
            <button onClick={() => setTodos([...Todos,newTodo]) }>Add Todo</button>
            <TodoList  todos={Todos} />
        </div>
    );
}

export default Todo;