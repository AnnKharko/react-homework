import React, {Component} from 'react';
import AllPeopleComponent from "./components/people/allPeople/AllPeopleComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPlanetsComponent from "./components/planets/allPlanets/AllPlanetsComponent";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/people'}>
                            people
                        </Link>
                    </div>
                    <div>
                        <Link to={'/planets'}>
                            planets
                        </Link>
                    </div>

                    <hr/>
                    <Switch>
                        <Route path={'/people'} render={() => <AllPeopleComponent/>}/>
                        <Route path={'/planets'} render={() => <AllPlanetsComponent/>}/>
                    </Switch>


                    <hr/>

                </div>
            </Router>
        );
    }
}

export default App;