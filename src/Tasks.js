import React from 'react';
import { Button } from 'antd';
const Tasks = (props) => {
    return (
        <div className='py-3 border m-5'>
            <input type="text" placeholder={'Enter Task Here'} className={'p-1'}></input>
            <Button type={'primary'}></Button>
        </div>
    )
}

export default Tasks;