import React, {Component} from 'react';
import {PeopleService} from "../../../services/PeopleService";
import PersonComponent from "../person/PersonComponent";
import './allPeople.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullPerson from "../fullPerson/FullPerson";

class AllPeopleComponent extends Component {
    state = { people:[]};
    peopleService = new PeopleService();
   async componentDidMount() {
       let people = await this.peopleService.getAllPeople();
       this.setState({people : people.results });
    }

    render() {
       let{people} = this.state;
       let{match:{url}} = this.props;
        console.log(people);
        return (
            <div>
                { people.map((value, index) => <PersonComponent item = {value} key = {index} id = {index+1}/>)}
                <div className={'nest'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            console.log(props);
                            const {match:{params:{id}}} = props;
                            return   <FullPerson {...props} key = {id} />
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPeopleComponent);