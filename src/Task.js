import React from 'react';
const Task = (props) => {
    return (
        <div className={'task'}>
            <li className={'border-bottom taskItem'}>
                <input type='checkbox' className={'mr-2'}/>Dishes
            </li> 
        </div>
    )
}

export default Task;