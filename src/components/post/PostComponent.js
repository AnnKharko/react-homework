import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class PostComponent extends Component {
    render() {
        let {match:{url}, item} = this.props;
        return (
            <div>
                {item.id}  - {item.title} - <Link to={`${url}/${item.id}`}>Info</Link>
            </div>
        );
    }
}

export default withRouter(PostComponent);
