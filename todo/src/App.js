// src/App.js
import React, { useState } from 'react';
import Todo from './Todos';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!input) return;
        const newTodo = { id: Date.now(), text: input };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
            <div>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default App;
