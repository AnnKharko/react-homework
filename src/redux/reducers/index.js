import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import todosReducer from "./todos-reducer";

export const reducer = combineReducers({
    todos : todosReducer,
    counter: counterReducer
});