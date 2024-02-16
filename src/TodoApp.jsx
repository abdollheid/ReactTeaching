import { useState } from "react";

export default function TodoApp(){
    const [todo, setTodo] = useState('');
    return <>
        <input type="text" onChange={ (event) => {
            setTodo(event.target.value);
        }}/>
      
        <h1>{todo}</h1>
    </>; 
}
// challenge create new component TodoApp2 
// has input field one row of todo

