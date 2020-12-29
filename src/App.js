
import React, {memo, useMemo,useState, useEffect, useReducer} from "react";

export default function App() {
    const [counter, SetCounter] = useState(0);
    const onclickHandler = () => {
        // SetCounter(counter + 1);
        SetCounter((prevState) => prevState + 1)
    }
    const decHandler = () => {
        //SetCounter(counter-1);
        SetCounter((prevState) => prevState - 1)
    }
    const resetHandler = () => {
        SetCounter(0);
    }
    return (
        <div>
            <button onClick={onclickHandler}>Inc</button>
            <button onClick={decHandler}>Dec</button>
            <button onClick={resetHandler}>Reset</button>
            <h1> Counter value: {counter}</h1>
            <h2> Start editing to see some magic happen!</h2>
        </div>
    )
}