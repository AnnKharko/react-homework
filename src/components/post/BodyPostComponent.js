import React, {Component} from 'react';

class BodyPostComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'body'}>

                {item.title}
                <p> {item.body} </p>
            </div>
        );
    }
}

export default BodyPostComponent;