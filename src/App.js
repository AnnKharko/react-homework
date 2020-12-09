import React, {Component} from 'react';
import AllUsersComponent from "./components/allUsers/AllUsersComponent";
import AllPostsComponent from "./components/allPosts/AllPostsComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (

                <Router>
                    <div>
                        <div>
                            <Link to={'/users'}>
                                Users
                            </Link>
                        </div>
                        <div>
                            <Link to={'/posts'}>
                                Posts
                            </Link>
                        </div>

                        <hr/>
                        <Switch>
                            <Route path={'/users'} render = {() => {
                               return  <AllUsersComponent/>
                            }}/>
                            <Route path={'/posts'} component={AllPostsComponent}/>
                        </Switch>
                        <hr/>
                    </div>
                </Router>

        )
    }
}

export default App;