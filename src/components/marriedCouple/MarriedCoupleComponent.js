import React, {Component} from 'react';
import './couple.css';

class MarriedCoupleComponent extends Component {
    render() {
        let {item, wife} = this.props;
        return (
            <div className={'couple'}>
                 {item.name}    +    {wife.name}  -------- married!
            </div>
        );
    }
}

export default MarriedCoupleComponent;
