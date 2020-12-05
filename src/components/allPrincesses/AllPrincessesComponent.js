import React, {Component} from 'react';
import {princesses} from "../../data";
import PrincessComponent from "../princess/PrincessComponent";



class AllPrincessesComponent extends Component {
    render() {
        return (
            <div>
                { princesses.map((value,index)=>  (<PrincessComponent item = {value} key = {index}/>))}
            </div>
        )
    }
}

export default AllPrincessesComponent;