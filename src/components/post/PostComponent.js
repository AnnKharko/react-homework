import React, {Component} from 'react';
import './postStyle.css';
class PostComponent extends Component {

    render() {
        let {item, selectPost} = this.props;
        return (
            <div className={'target'}>
                {item.id} - {item.title}

                <button onClick={() => selectPost(item.id)}>Show more</button>

            </div>
        );
    }
}

export default PostComponent;