import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import PostComponent from "../post/PostComponent";


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
            </div>
        );
    }
}

export default AllPostsComponent;