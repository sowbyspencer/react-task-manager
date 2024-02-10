import React from 'react';
import TasksDisplay from './TasksDisplay.js'
import TaskForm from './TaskForm.js'

function TasksContainer() {
    return (
        <div class="tasksContainer" style={style}>
            {/* <TasksDisplay tasks={filteredTasks} />
            <TaskForm addTask={addTask} /> */}
            <TasksDisplay />
            <TaskForm />
        </div>
    );
};

const style = {
    display: 'flex',
    justifyContent: 'space-between',
}

export default TasksContainer;