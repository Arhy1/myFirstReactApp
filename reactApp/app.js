import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
//import TodoApp from './components/TodoApp';

const dummyData = ['Eat Breakfast', 'Eat Lunch', 'Eat Dinner', 'Eat Desert'];

ReactDOM.render(<TodoList/>,
    document.getElementById('root'));