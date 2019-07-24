import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList'; //something here

//import TodoApp from './components/TodoApp';

//const dummyData = ['Eat Breakfast', 'Eat Lunch', 'Eat Dinner', 'Eat Desert'];

ReactDOM.render(<TodoApp/>,
    document.getElementById('root'));