import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";
import CommentComponent from "../comment/CommentComponent";
import './allCommentsStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class AllCommentsComponent extends Component {

    commentService = new CommentService();
    state = {comments: []};

    async componentDidMount() {
       let comments = await this.commentService.getAllComments();
       this.setState({comments});
    }

    render() {
       let {comments} = this.state;
        return (
            <div>
                {comments.map(value =>
                    <CommentComponent item = {value} key = {value.id}/>)}

                <div className={'nest'}>
                    <Switch>
                        <Route path={'/comments/:id'} render={(props) => {
                            console.log(props);

                            return 'Here will be some comment info!';
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllCommentsComponent;