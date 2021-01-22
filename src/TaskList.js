import React from 'react';
import Task from './Task';
const TaskList = (props) => {

    return(
        <div className={'bg-light m-5 p-3 d-flex'}>
            <ul style={{listStyleType:'none'}}>
                <Task />       
            </ul>
        </div>
    )
};

export default TaskList;