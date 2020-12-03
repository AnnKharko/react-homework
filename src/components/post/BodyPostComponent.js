import React, {Component} from 'react';

class BodyPostComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'body'}>
                {item.body}
            </div>
        );
    }
}

export default BodyPostComponent;