import React, {Component} from 'react';
import {UserService} from "../../services/UserService";

class FullUserComponent extends Component {
    state = {user : null};
    userService = new UserService();
   async componentDidMount() {
       let {match: {params: {id}}} = this.props;
       let user = await this.userService.getUserById(id);
       this.setState({user});
   }

    render() {
        let{user} = this.state;
        return (
            <div>
                { user &&  <div> {user.id} - {user.name} - {user.username} - {user.email}</div>}
            </div>
        );
    }
}

export default FullUserComponent;