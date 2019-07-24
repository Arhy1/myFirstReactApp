import React from 'react';
import Todo from './Todo';

//const dummyData = ['Eat Breakfast', 'Eat Lunch', 'Eat Dinner', 'Eat Desert'];

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);

    }
    


    render() {


        return (
            <ul>
                {this.props.data.map((taskName, i) => <Todo
                    removeTodo={() => this.props.removeTodo(i)}
                    taskName={taskName}/>)} 
            </ul>

        );
    }
}