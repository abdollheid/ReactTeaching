import { useState } from "react";

export default function TodoApp(){
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');

    const onClickHandler = () => {
        // todoList.push(todo);
        setTodoList((prevState) => {
            return [...prevState, todo]
        });};

    const onTextChangeHandler = (event) => {
        setTodo(event.target.value);
    };
    
    return <>
        <input type="text" onChange={onTextChangeHandler}/>

        <button onClick= {onClickHandler}> Add todo</button>
        
        {todoList.map((element) => { return <h3>{element}</h3>})}
    
    </>; 
}


// posts = ['task1', 'task2', 'task3'];
// posts = ['task1task1', 'task2task2', 'task3task3'];
// posts = [<h1>'task1'</h1>, <h1>'task2'</h1>, <h1>'task3'</h1>];
// challenge create new component TodoApp2 
// has input field one row of todo

