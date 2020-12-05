import React, {Component} from 'react';
import './couple.css';

class MarriedCoupleComponent extends Component {
    render() {
        let {item, wife} = this.props;
        return (
            <div className={'couple'}>
                <h4> {item.name} married with {wife.name} </h4>
            </div>
        );
    }
}

export default MarriedCoupleComponent;