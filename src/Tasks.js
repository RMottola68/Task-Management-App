import React from 'react';
import { Button } from 'antd';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Tasks = (props) => {
    return (
        <div className='py-3 m-5'>
            <div className={'d-flex justify-content-center'}>
                <input type="text" placeholder={'Enter Task Here'} className={'p-1 mx-2 w-100'}></input>
                <Button type={'primary'}>Add</Button>
            </div>

            <div className={'bg-light m-2 p-3'}>
                <ul style={{listStyleType:'none'}}>
                    {/* <li className={'border-bottom'}>
                        <input type='checkbox' className={'mr-2'}/>dicks
                    </li>
                    <li className={'border-bottom'}>
                        <input type='checkbox' className={'mr-2'}/>butts
                    </li>
                    <li className={'border-bottom'}>
                        <input type='checkbox' className={'mr-2'}/>boobs
                    </li> */}
                </ul>
            </div>
            <div className={'d-flex justify-content-center card-container'}>
            <Tabs defaultActiveKey="1" type='card'>
                <TabPane tab="All" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Active" key="2" type='card'>
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Completed" key="3" type='card'>
                    'Content of Tab Pane 3
                </TabPane>
            </Tabs>
            </div>
        </div>
    )
}

export default Tasks;