import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class PersonComponent extends Component {

    render() {
        let {item, id, match:{url}} = this.props;
        return (
            <div>
                {item.name} - {item.height} - <Link to={`${url}/${id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(PersonComponent);