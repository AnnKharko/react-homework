import React, {Component} from 'react';
import {UserService} from "./service/UserService";
import User from "./components/user/User";
import Form from "./components/Form";

class App extends Component {
    state = {user: []};
    userService = new UserService();
   async componentDidMount() {
       let user =  await this.userService.getUser()
        this.setState({user});
    }

    render() {
        let {user} = this.state;
        // console.log(user);
        return (
            <div>
                {/*<div> <Form/></div>*/}
                <div>{user.map(value => <User item = {value} key = {value.id}/>)}</div>
            </div>
        );
    }
}

export default App;