import React, {Component} from 'react';
import TodoComponent from "../Todo/TodoComponent";
import './todosStyle.css';

class Todos extends Component {
    state = {todos: [], classState: 'one', choseOne: null};
    flag = false;

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(todosFromAPI => {
                this.setState({todos: todosFromAPI});
            })
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }

    selectThisTodo = (id) => this.setState({choseOne: this.state.todos.find(value => value.id === id)})
    // {
    //     let choseOne = this.state.todos.find(value => value.id === id);
    //     this.setState({choseOne});
    // }


    render() {
        let {todos, classState, choseOne} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}> All comments page</h1>
                {
                    todos.map(value => {
                        let name = 'target';
                        if (value.id % 2) {name = 'next'}

                        return (<TodoComponent
                            item={value}
                            key={value.id}
                            clsName={name}
                            selectThisTodo={this.selectThisTodo}
                        />)
                    })
                }
                <hr/>
                {/*<h2 className={'bottom'}> {choseOne && (< TodoComponent item={choseOne}/>)}</h2>*/}
                { choseOne  && <h2 className={'bottom'}> {choseOne.id} - {choseOne.title} </h2> }
            </div>
        );
    }
}

export default Todos;