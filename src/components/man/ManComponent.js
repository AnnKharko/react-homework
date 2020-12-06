import React, {Component} from 'react';
import './man.css';

class ManComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={'man'}>
                {item.id} - {item.name} - {item.age}
            </div>
        );
    }
}

export default ManComponent;
