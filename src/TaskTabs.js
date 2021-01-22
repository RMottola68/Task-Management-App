import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const TaskTabs = (props) => {
return(
    <div className={'d-flex justify-content-center card-container'}>
        <Tabs defaultActiveKey="1" type='card'>
            <TabPane tab="All" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Active" key="2" type='card'>
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Completed" key="3" type='card'>
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </div>
)};

export default TaskTabs;