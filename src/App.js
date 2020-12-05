import React, {Component} from 'react';
import AllMenComponent from "./components/allMen/AllMenComponent";
import AllWomenComponent from "./components/allWomen/AllWomenComponent";
import './App.css';
import AllMarriedCouplesCompoent from "./components/allMarriedCouples/AllMarriedCouplesCompoent";

class App extends Component {
    render() {
        return (
            <div className={'target'}>
                { <div className={'point'}><AllMenComponent/></div> }
                { <div className={'point'}> <AllWomenComponent/> </div> }
                { <div className={'married'}> <AllMarriedCouplesCompoent/> </div>}
            </div>
        );
    }
}

export default App;