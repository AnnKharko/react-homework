import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class PlanetComponent extends Component {
    render() {
        let{item, id, match:{url}} = this.props;
        return (
            <div>
                {id} - {item.name} - diameter : {item.diameter} - <Link to={`${url}/${id}`}>Planet detail</Link>
            </div>
        );
    }
}

export default withRouter(PlanetComponent);