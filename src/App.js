import React, {Component} from 'react';
import AllUsersComponent from "./components/allUsers/AllUsersComponent";

export let {Provider, Consumer} = React.createContext('hi every one');

class App extends Component {

    render() {
        return (
            <div>
                <Provider value={'hello'}>
                    <AllUsersComponent/>
                </Provider>
            </div>
        );
    }
}

export default App;