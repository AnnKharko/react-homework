import React, {Component} from 'react';
import {taxi} from "./data";
import TaxiComponent from "./component/taxi/TaxiComponent";

class App extends Component {
    render() {

        return (
            <div>
                { taxi.map((value, index) => {
                    let name = 'target';
                    if (value.year >= 2018) {name = "new"}
                    return  (<TaxiComponent item = {value} key = {index} clsName = {name}/>)
                })}
            </div>
        );
    }
}

export default App;