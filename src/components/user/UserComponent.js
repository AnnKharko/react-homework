import React, {Component} from 'react';

class UserComponent extends Component {

    render() {
        let {item, selectThisUser} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                <button onClick={() => selectThisUser(item.id)}>Chose Me</button>
            </div>
        );
    }
}

export default UserComponent;