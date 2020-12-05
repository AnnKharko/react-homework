import React, {Component} from 'react';
import './princeStyle.css';

class PrinceComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'prince'}>
                {item.name} - {item.age}
            </div>
        )
    }
}

export default PrinceComponent;