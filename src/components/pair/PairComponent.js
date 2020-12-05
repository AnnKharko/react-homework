import React, {Component} from 'react';

class PairComponent extends Component {
    render() {
        let {item, princess} = this.props;
        return (
            <div>
                {item.name}  + {princess.name} - {item.sizeShoe} = {princess.footSize}
            </div>
        );
    }
}

export default PairComponent;