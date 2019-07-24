import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dummyData = ['Eat Breakfast', 'Eat Lunch', 'Eat Dinner', 'Eat Desert'];

//renders TodoList and InputLine

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dummyData
        };
    }

    addTodo(taskName) {
        // 1 make copy of state.data
            const copy = this.state.data.slice();

        //2 modify it
            copy.push(taskName);

        //3 push back to the state
            this.setState ({
                data: copy
            });
    }

    removeTodo(index) {

        console.log(index);

        //1. make copy of state data
        const copy = this.state.data.slice();

        //2. remove, slice at index given
        copy.splice(index, 1);

        //3. push back to the state
        this.setState ({
            data: copy
        });
    }

    render() {

        return(

            <div>
                <TodoList data={this.state.data} removeTodo={(i) => this.removeTodo(i)}/>
                <InputLine addTodo={(taskName) => this.addTodo(taskName)} />
            </div>

        ); 

    }




}