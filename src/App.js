
import React, {memo, useMemo,useState, useEffect, useReducer} from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_TODO': {
            return action.payload;
        }
        case 'CHANGE_TODO_STATUS':{
            return {
                ...state,
                completed: !state.completed
            };
        }
        case 'CHANGE_TODO_TITLE': {
            return{
                ...state,
                title: action.payload
            };
        }
        default: {
            console.error('didn\'t found case for action:', action );
            return state;
        }
    }
};
    const initialState = {
        userId: null,
        id: null,
        title:'',
        completed: false
    };
export default function App() {
    const [state, dispatch] = useReducer(reducer,initialState);
    // const [user, SetUser] = useState({name: 'Anna', age: 20});
    const [counter, SetCounter] = useState(1);


    useEffect(() => {
        console.log('i was called');
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({type: 'SET_TODO', payload: json});
    });
    },[counter]);
    const onclickHandler = () => SetCounter((prev) => prev + 1);

    const decHandler= () => {
        SetCounter((prev) => prev - 1);
    }
    const resetHandler = () => {
        SetCounter((prev) => 0 );
    }
    // const userNameClickHandler = () => {
    //     SetUser((prevState) => ({...prevState,
    //     name: prevState.name + '!'}))
    // }
    const onStatusChange = () => dispatch({type : 'CHANGE_TODO_STATUS'});
    const onTitleChange = () => dispatch({type: 'CHANGE_TODO_TITLE' , payload: Math.random()});

    return (
        <div>
            <button onClick={onclickHandler}>Inc</button>
            <button onClick={decHandler}>Dec</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={onTitleChange}>Change_todo_title</button>
            <button onClick={onStatusChange}>Change_todo_status</button>
            {/*<button onClick={userNameClickHandler}>change user name</button>*/}
            <h1>Counter value: {counter}</h1>
            { !!state && (
                <>
                <h2> {state.id}</h2>
                <h2> {state.title}</h2>
                <h2> {state.completed.toString()}</h2>
                <h2> Start editing to see some magic happen!</h2>
                </>
                )}
        </div>
    )
}