import React from 'react';
import Task from './Task';
const TaskList = ({ tasks, setTasks, filteredTasks }) => {

    return(
        <div className={'bg-light m-5 p-3 d-flex'}>
            <ul style={{listStyleType:'none'}}>
                {filteredTasks.map(task => (
                    <Task 
                    setTasks={setTasks} 
                    key={task.id}
                    tasks={tasks}
                    task={task}
                    text={task.text} 
                    id={task.id}/>
                ))}
            </ul>
        </div>
    )
};

export default TaskList;