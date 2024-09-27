
import React from 'react';

const Todos = ({ todo, onDelete }) => {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default Todos;
