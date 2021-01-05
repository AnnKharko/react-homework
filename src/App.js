import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {incCounter, decCounter, resetCounter,
     setTodos} from './redux/action-creators';

export default function App() {
    // const test = useSelector((state) => {
    //     console.log(state);
    //     return state;
    // })

    // ---ONE WAY----
    // const counter = useSelector(({counter}) => counter.counter);
    // const todos = useSelector(({todos}) => todos.todos)
    //----ANOTHER WAY---
    const {counter, todos} = useSelector(({counter: {counter}, todos: {todos}}) => ({todos, counter}));


    const dispatch = useDispatch();
    useEffect(() =>{
        fetchTodos()
    },[])
    const fetchTodos = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        dispatch(setTodos(data));
    }


    const handleInc = () => dispatch(incCounter());
    const handleDec = () => dispatch(decCounter());
    const handleReset = () => dispatch(resetCounter());

    return (
        <div>
            <h1> Hello CodeSandBox {counter}</h1>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
            <button onClick={handleReset}>Reset</button>
            { todos.map((todo) =>
            <h2>
                {todo.id} - {todo.title}
            </h2>)}

        </div>
    )
}