import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import UserComponent from "../user/UserComponent";
import './AllUserStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullUserComponent from "../fullUser/FullUserComponent";


class AllUsersComponent extends Component {
    state = {users : []};
    userService = new UserService();

   async componentDidMount() {
       let users = await this.userService.getAllUsers();
       this.setState({users});
   }

    render() {
       let {users} = this.state;
        return (
            <div>
                {users.map(value => <UserComponent item = {value} key = {value.id}/>)}
                <div className={'nest'}>
                    <Switch>
                        <Route path = {'/users/:id'} render={(props) => {
                             const {match:{params:{id}}} = props;
                            return  <FullUserComponent {...props} key = {id}/>
                                }}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default withRouter(AllUsersComponent);