import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import PostComponent from "../post/PostComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullPostComponent from "../fullPost/FullPostComponent";

class AllPostsComponent extends Component {
    state = { posts:[]};
    postService = new PostService();

   async  componentDidMount() {
      let posts = await this.postService.getAllPosts();
       this.setState({posts});
    }

    render() {
       let  {posts} = this.state;
        return (
            <div>
                { posts.map(value => <PostComponent item = {value} key = {value.id}/>)}

                <div className={'nest'}>
                    <Switch>
                        <Route path={'/posts/:id'} render={(props) => {
                            const {match : {params: {id}}} = props;
                            return < FullPostComponent {...props} key = {id}/>
                        }}/>

                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter (AllPostsComponent);