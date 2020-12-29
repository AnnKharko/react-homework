
import React, {memo, useMemo,useState, useEffect, useReducer} from "react";

export default function App() {
    const [user, SetUser] = useState({name: 'Anna', age: 20});
    useEffect(() => {
        console.log('i was called');
    },[user.name]);
    const onclickHandler = () => {
        SetUser((prevState) => ({...prevState,
        age: prevState.age + 1}));
    }
    const decHandler= () => {
        SetUser((prevState) => ({...prevState,
            age: prevState.age - 1}));
    }
    const resetHandler = () => {
        SetUser((prevState) => ({...prevState,
            age: 0}));
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
            <h1> User name: {user.name}</h1>
            <h1> User age: {user.age}</h1>
            <h2> Start editing to see some magic happen!</h2>
        </div>
    )
}