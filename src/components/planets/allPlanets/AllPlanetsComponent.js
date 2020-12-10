import React, {Component} from 'react';
import {PlanetService} from "../../../services/PlanetService";
import PlanetComponent from "../planet/PlanetComponent";
import './allPlanetsStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullPlanetComponent from "../fullPlanet/FullPlanetComponent";

class AllPlanetsComponent extends Component {
    state = { planets:[]};
    planetService = new PlanetService();
    async componentDidMount() {
       let planets = await this.planetService.getAllPlanets();
       this.setState({planets: planets.results})

    }

    render() {
        let{planets} = this.state;
        let{match:{url}} = this.props;
        console.log(planets);
        return (
            <div>
                { planets.map((value, index)=> <PlanetComponent item = {value} key = {index} id = {index + 1}/> )}
                <div className={'nest'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                           const{match:{params:{id}}} = props;
                           return <FullPlanetComponent {...props} key = {id}/>
                        }}/>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(AllPlanetsComponent);