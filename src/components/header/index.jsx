import React, { Component } from 'react';
import './index.scss'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// 引入模态框组件
import ModelBox from '../model/index'
const users={
    name:'张松涛',
    text:'用户信息'
}
class Top extends Component {
    constructor(props){
        super(props)
        this.state={
            model:false
        }
    }
    user_info(){
        this.setState({
            model:true
        })
        // console.log('点击了用户欣喜',this.state.model)
    };
    //子组件关闭的值
    getmodelData(val){
        this.setState({
            model:val
        })
    }
    render() {
        return (
            <div className="header_box">
                <div className="left">
                    欢迎登录硕宏科技控制台
                </div>
                <div className="user" onClick={this.user_info.bind(this)}>
                    <Avatar size="large" icon={<UserOutlined />} />
                    <span>{users.name}</span>
                </div>
                <ModelBox model={this.state.model} getmodelData={this.getmodelData.bind(this)}/>
            </div>
        );
    }
}

export default Top;