import React, {Component} from 'react';
import AllPeopleComponent from "./components/people/allPeople/AllPeopleComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/people'}>
                        people
                    </Link>

                    <hr/>
                    <Switch>
                        <Route path={'/people'} render={() => <AllPeopleComponent/>}/>
                    </Switch>
                    <hr/>

                </div>
            </Router>
        );
    }
}

export default App;