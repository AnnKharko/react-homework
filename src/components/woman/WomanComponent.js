import React, {Component} from 'react';
import './woman.css';

class WomanComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'woman'}>
                {item.id} - {item.name} - {item.age}
            </div>
        );
    }
}

export default WomanComponent;
