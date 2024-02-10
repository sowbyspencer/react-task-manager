import React, {useState} from 'react';
import TaskForm from './TaskForm';
import SearchSection from './SearchSection.js'
import TasksContainer from './TasksContainer.js'

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main style={mainStyle}>
            <SearchSection onSearch={handleSearch} />
            <TasksContainer filteredTasks={filteredTasks} addTask={addTask} />
        </main>
    );
};

const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    flex: '1',
}

export default Main;