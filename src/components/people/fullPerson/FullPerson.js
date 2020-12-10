import React, {Component} from 'react';
import {PeopleService} from "../../../services/PeopleService";

class FullPerson extends Component {
    state = {person: null};
    peopleService = new PeopleService();

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let person = await this.peopleService.getPerson(id);
        this.setState({person});
    }

    render() {
        let {person} = this.state;
        return (
            <div>
                {person &&
                <div> {person.name} - {person.gender} - {person.skin_color} - {person.birth_year} - {person.height} - {person.mass} - {person.eye_color} - {person.homeworld}</div>}
            </div>
        );
    }
}

export default FullPerson;