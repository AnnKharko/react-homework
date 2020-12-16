import {Consumer} from './App.js';
import React from 'react';

export default function UserComponent(props) {
    let{item} = props;

    return (
    <div>
        <Consumer>
            {
                (value ) => (<div> {item.id} - {item.name} - {value}</div>)
            }
        </Consumer>
    </div>
)
}
