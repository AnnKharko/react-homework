import React, {Component} from 'react';
import {women} from "../../data";
import WomanComponent from "../woman/WomanComponent";

class AllWomenComponent extends Component {
    render() {
        return (
            <div>
                { women.map(value =>  <WomanComponent item = {value} key = {value.id}/>)}
            </div>
        );
    }
}

export default AllWomenComponent;