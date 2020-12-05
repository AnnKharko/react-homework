import React, {Component} from 'react';
import './princessStyle.css';

class PrincessComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'princess'}>
                {item.name} - {item.age}
            </div>
        )
    }
}

export default PrincessComponent;