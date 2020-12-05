import React, {Component} from 'react';
import AllPrincessesComponent from "./components/allPrincesses/AllPrincessesComponent";
import AllPrincesComponent from "./components/allPrinces/AllPrincesComponent";
import './App.css';
import AllPairsComponent from "./components/allPairs/AllPairsComponent";
class App extends Component {
    render() {
        return (
            <div className={'target'}>
                <div className={'point'}><AllPrincessesComponent/> </div>

                <div className={'point'}><AllPrincesComponent/> </div>

                <div className={'pair'}> <AllPairsComponent/> </div>

            </div>


        );
    }
}

export default App;

// Створити масив man. { id, name, age, wife_id }
// Створити масив woman. { id, name, age, husband_id }
//
// Поділити сторінку на 3 колонки, в 1 вивести чоловіків, в 2 жінок.
//     В третю колонку ми виводимо пару ( чоловік + жінка, відповідно до id)
//
// Компоненти - Mans, Man, Womens, Woman, MarriedCouples, MarriedCouple