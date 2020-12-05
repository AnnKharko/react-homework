import React, {Component} from 'react';
import {princes} from "../../data";
import PrinceComponent from "../prince/PrinceComponent";

class AllPrincesComponent extends Component {
    render() {

        return (
            <div>
                { princes.map( (value, index) => (<PrinceComponent item = {value} key = {index}/>))}
            </div>
        );
    }
}

export default AllPrincesComponent;