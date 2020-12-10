import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";
import CommentComponent from "../comment/CommentComponent";
import './allCommentsStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullCommentComponent from "../fullComment/FullCommentComponent";

class AllCommentsComponent extends Component {
    state = {comments: []};
    commentService = new CommentService();

    async componentDidMount() {
       let comments = await this.commentService.getAllComments();
       this.setState({comments});
    }

    render() {
       let {comments} = this.state;
        return (
            <div>
                {comments.map(value => <CommentComponent item = {value} key = {value.id}/>)}
                    <div className={'nest'}>
                    <Switch>
                        <Route path={'/comments/:id'} render={(props) => {
                            const {match:{params:{id}}} = props;
                            return <FullCommentComponent {...props} key = {id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllCommentsComponent);