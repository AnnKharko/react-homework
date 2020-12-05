import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {

       let{item, selectedComment, clsName} = this.props;
        return (
            <div className={clsName}>
                {item.id} - {item.name}
                <p>email: {item.email}</p>
                <button onClick={() => selectedComment(item.id)}>Show comment</button>
            </div>
        );
    }
}

export default CommentComponent;