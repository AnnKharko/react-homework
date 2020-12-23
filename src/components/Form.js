import React, {Component} from 'react';

class Form extends Component {
    myForm = React.createRef();
    state = {inputValue: ''}

    render() {

        return (
            <div>
                <form action={'/savedata'} onSubmit = {this.send} ref={this.myForm}>
                    <input type={'number'} onInput={this.commitState} value={this.state.inputValue}> </input>
                    <button>Send</button>
                </form>

            </div>
        );

    }
    send = (e) => {
        e.preventDefault()
    };
    commitState = (e) => {
        console.log(e.target.value())
        this.setState({inputValue:e.target.value})

    }
}

export default Form;