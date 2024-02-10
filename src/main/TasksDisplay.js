import React from "react";
import Task from './Task';

function TasksDisplay({tasks}) {
    return (
        <section id="tasksDisplay" style={style}>
            <h2 style={style.h2}>Tasks</h2>
            <ul>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
            </ul>
        </section>
    );
}

const style = {
    backgroundColor: '#e9ecef',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '65%',
    boxSizing: 'border-box',
    h2: {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
    },
}

export default TasksDisplay;