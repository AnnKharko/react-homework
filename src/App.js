import React, {Component} from 'react';
import AllUsersComponent from "./components/allUsers/AllUsersComponent";
import AllPostsComponent from "./components/allPosts/AllPostsComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCommentsComponent from "./components/allComments/AllCommentsComponent";

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
                        <div>
                            <Link to={'/comments'}>
                                Comments
                            </Link>
                        </div>

                        <hr/>
                        <Switch>
                            <Route path={'/users'} render = {() => {
                               return  <AllUsersComponent/>
                            }}/>
                            <Route path={'/posts'} component={AllPostsComponent}/>
                            <Route path={'/comments'} render = {() => {
                                return  <AllCommentsComponent/>
                            }}/>
                        </Switch>
                        <hr/>
                    </div>
                </Router>

        )
    }
}

export default App;