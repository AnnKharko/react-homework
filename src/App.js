import React, {Component} from 'react';
import AllMenComponent from "./components/men/AllMenComponent";
import AllWomenComponent from "./components/women/AllWomenComponent";
import AllMarriedCouplesComponent from "./components/marriedCouples/AllMarriedCouplesComponent";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className={'target'}>
                { <div className={'point'}><AllMenComponent/></div> }
                { <div className={'point'}> <AllWomenComponent/> </div> }
                { <div className={'married'}> <AllMarriedCouplesComponent/> </div>}

            </div>
        );
    }
}

export default App;