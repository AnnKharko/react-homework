import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import UserComponent from "../user/UserComponent";
import './AllUserStyle.css';


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

                </div>
            </div>

        );
    }
}

export default AllUsersComponent;