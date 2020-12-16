import React, {Component} from 'react';
// import {UsersService} from "../../service/UsersService";
import UserComponent from "../user/UserComponent";

class AllUsersComponent extends Component {
    state = {users:[]};
    // usersService = new UsersService();

    componentDidMount() {
        // let users = this.usersService.getAllUsers();
        // this.setState({users});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })
    }


    render() {
        const {users} = this.state;
        console.log(users);

        return (
            <div>
                {
                    users.map(value => <UserComponent item = {value} key = {value.id}/> )
                }
            </div>
        );
    }
}

export default AllUsersComponent;