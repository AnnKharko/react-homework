import React, {Component} from 'react';
import {men} from "../../data";
import ManComponent from "../man/ManComponent";

class AllMenComponent extends Component {
    render() {

        return (
            <div>
                { men.map(value => (<ManComponent item = {value} key = {value.id}/>))  }
            </div>
        );
    }
}

export default AllMenComponent;
