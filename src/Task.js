import React from 'react';

const Task = ({ text, task, tasks, setTasks }) => {
    const deleteHandler = () => {
        setTasks(tasks.filter(el => el.id !== task.id))
    };

    const completeHandler = () => {
        setTasks(tasks.map(item => {
            if(item.id === task.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );   
    }

    return (
        <div className='task border-bottom'>
            <li className='taskItem'></li> 
            <input type='checkbox' className='mr-2' onClick={completeHandler}/>{text}
            <button onClick={deleteHandler} className='trash-btn m-2'>
                <i className='fas fa-trash'></i>
            </button>
            
        </div>
    )
}

export default Task;