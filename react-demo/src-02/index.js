import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import TodoList from './TodoList';

ReactDOM.render(
    <div>
        <Counter/>
        <TodoList/>
    </div>
,document.getElementById('root'));