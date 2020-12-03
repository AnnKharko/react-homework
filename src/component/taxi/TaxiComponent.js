import React, {Component} from 'react';
import './taxiStyle.css';
class TaxiComponent extends Component {
    render() {
        let{item, clsName} = this.props;
        return (
            <div className={clsName}>
                <h4>
                    {item.producer} - {item.model} - {item.year} - {item.price} - driver  {item.driver}
                </h4>
            </div>
        );
    }
}

export default TaxiComponent;