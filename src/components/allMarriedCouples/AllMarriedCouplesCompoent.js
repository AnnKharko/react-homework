import React, {Component} from 'react';
import {men, women} from "../../data";
import MarriedCoupleComponent from "../marriedCouple/MarriedCoupleComponent";

class AllMarriedCouplesCompoent extends Component {

    findWife = (id) => {
       return  women.find(value => value.id === id);
    }

    render() {


        return (
            <div>
                { men.map(value => {
                    let wife = this.findWife(value.id);
                    return <MarriedCoupleComponent item = {value} key = {value.id} wife = {wife} />
                })}
            </div>
        );
    }
}

export default AllMarriedCouplesCompoent;