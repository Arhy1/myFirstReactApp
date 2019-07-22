import React from 'react';
import Todo from './Todo';

const dummyData = ['Eat Breakfast', 'Eat Lunch', 'Eat Dinner', 'Eat Desert'];

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: dummyData
        };
    }
    


    render() {

        this.props.removeTodo;

        return (
            <ul>
                {this.state.data.map((taskName, i) => <Todo
                    removeTodo={() => this.state.removeTodo(i)}
                    taskName={taskName}/>)} 
            </ul>

        );
    }
}