
import React, {memo, useMemo,useState, useEffect, useReducer} from "react";

export default function App() {
    const [user, SetUser] = useState({name: 'Anna', age: 20});
    const [counter, SetCounter] = useState(1);
    const [todo, SetTodo] = useState();

    useEffect(() => {
        console.log('i was called');
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then( value => value.json())
            .then(json => SetTodo(json));
    },[counter]);
    const onclickHandler = () => SetCounter((prev) => prev + 1);

    const decHandler= () => {
        SetCounter((prev) => prev - 1);
    }
    const resetHandler = () => {
        SetCounter((prev) => 0 );
    }
    const userNameClickHandler = () => {
        SetUser((prevState) => ({...prevState,
        name: prevState.name + '!'}))
    }

    return (
        <div>
            <button onClick={onclickHandler}>Inc</button>
            <button onClick={decHandler}>Dec</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={userNameClickHandler}>change user name</button>
            <h1>Counter value: {counter}</h1>
            { !!todo && (
                <>
                <h2> {todo.id}</h2>
                <h2> {todo.title}</h2>
                <h2> {todo.completed.toString()}</h2>
                <h2> Start editing to see some magic happen!</h2>
                </>
                )}
        </div>
    )
}