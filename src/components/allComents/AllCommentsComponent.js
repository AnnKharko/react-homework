import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";
import CommentComponent from "../comment/CommentComponent";
import './allComments.css';

class AllCommentsComponent extends Component {

    state = {comments: [], choseOne: null};
    commentService = new CommentService();

    componentDidMount() {
        this.commentService.getAllComments().then(value => {
            this.setState({comments: value});
        })
    }

    selectedComment = (id) => {
        this.commentService.getCommentById(id).then(value => this.setState({choseOne : value}));
    }



    render() {
        let {comments,choseOne} = this.state;
        console.log(this.state);
        return (
            <div>
                {comments.map(value => {
                    let name;
                    if (value.id % 2) {
                        name = 'one'
                    } else {
                        name = 'two';
                    }
                   return  (<CommentComponent
                            item = {value}
                            key = {value.id}
                            selectedComment = {this.selectedComment}
                            clsName = {name}
                        />)
                    }
                   )}
                { choseOne &&  <h2 className={'target'}> {choseOne.id} - {choseOne.body} </h2>}
            </div>
        );
    }
}

export default AllCommentsComponent;