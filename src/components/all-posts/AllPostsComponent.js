import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import './allPostStyle.css';
import BodyPostComponent from "../post/BodyPostComponent";
import {PostService} from "../../services/PostService";

class AllPostsComponent extends Component {
    state = {posts: [], classState: 'one', chosenPost: null};
    flag = false;

    postService = new PostService();

    componentDidMount() {
        this.postService.getAllPosts()
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'});
        } else {
            this.setState({classState: 'two'});
        }
        this.flag = !this.flag;
    }

    selectPost = (id) => {
        this.postService.getPostById(id)
            .then( onePost => this.setState({chosenPost: onePost}) );
    }

    render() {
        let {posts, classState, chosenPost} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}> All User Page </h1>
                {
                    posts.map(value => (<PostComponent
                        item={value}
                        key={value.id}
                        selectPost={this.selectPost}/>))
                }
                <hr/>
                {
                    chosenPost && (<h4><BodyPostComponent item={chosenPost}/></h4>)
                }
            </div>
        );
    }
}

export default AllPostsComponent;