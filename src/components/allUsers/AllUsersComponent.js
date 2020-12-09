import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import UserComponent from "../user/UserComponent";
import './AllUserStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CommentComponent from "../comment/CommentComponent";


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
                            console.log(props);
                            return  'Here will be some user info! '
                                }}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default AllUsersComponent;
// export default withRouter(AllUsersComponent);