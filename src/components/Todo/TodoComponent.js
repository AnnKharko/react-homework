import React, {Component} from 'react';
import './todoStyle.css';

class TodoComponent extends Component {

    render() {
        let {item, clsName, selectThisTodo} = this.props;

        return (
            <div className={clsName}>
                {item.id} - {item.title}
                <button onClick={() => selectThisTodo(item.id)}> Click me</button>
            </div>
        );
    }
}

export default TodoComponent;