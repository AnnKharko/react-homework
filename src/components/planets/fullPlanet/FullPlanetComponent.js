import React, {Component} from 'react';
import {PlanetService} from "../../../services/PlanetService";

class FullPlanetComponent extends Component {
    state = { planet: null};
    planetService = new PlanetService();
    async componentDidMount() {
        let{match:{params:{id}} } = this.props;
        let planet = await this.planetService.getPlanet(id);
        this.setState({planet});
    }

    render() {
        let{planet} = this.state;
        return (
            <div>
                { planet && <div>{planet.name} - {planet.diameter} - {planet.climate} - {planet.rotation_period} - {planet.orbital_period} - {planet.gravity} - {planet.terrain}</div>}
            </div>
        );
    }
}

export default FullPlanetComponent;