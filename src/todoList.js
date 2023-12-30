function TodoList({todos}){  //todos-->[{},{}]
     
    return   <ul>{todos.map((todo,index) => <li key={index}>{todo}</li>)}</ul>     //todo-->{id:1,data :'some data'}
    
}

export default TodoList;