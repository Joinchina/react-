import React from 'react';
import { Layout } from 'antd';
import Top from '../../components/header/index';
import './index.scss'

import Tablebox from '../../components/tabs/index'
import Video from '../../components/video/index'
const { Header,Content } = Layout;

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:1,
            channel:[
                {index:1,name:'1通道'},
                {index:2,name:'2通道'},
                {index:3,name:'3通道'},
                {index:4,name:'4通道'},
                {index:5,name:'5通道'},
                {index:6,name:'6通道'},
                {index:7,name:'7通道'}
            ],
            select:[
                {index:8,name:'8通道'},
                {index:9,name:'9通道'},
                {index:10,name:'10通道'}
            ],
            channelIndex:0,//当前选择的几通道
            videoList:[
                {
                    img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2703043434,1252590424&fm=26&gp=0.jpg',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:1
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586626951024&di=af629d1f6e4f7cb75ba5d62798ece92a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb912bf96dc19b3b23530ae2259b60eb6cf70083f6680b-H9l0ri_fw658',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:2
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586626951024&di=9d7a380c838ddc10bd628d2cce820562&imgtype=0&src=http%3A%2F%2Fwww.goumin.com%2Fattachments%2Fphoto%2F0%2F0%2F61%2F15705%2F4020605o2.jpg',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:3
                },
                {
                    img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2703043434,1252590424&fm=26&gp=0.jpg',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:4
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586626951024&di=af629d1f6e4f7cb75ba5d62798ece92a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb912bf96dc19b3b23530ae2259b60eb6cf70083f6680b-H9l0ri_fw658',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:5
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586626951024&di=9d7a380c838ddc10bd628d2cce820562&imgtype=0&src=http%3A%2F%2Fwww.goumin.com%2Fattachments%2Fphoto%2F0%2F0%2F61%2F15705%2F4020605o2.jpg',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:6
                },
                {
                    img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2703043434,1252590424&fm=26&gp=0.jpg',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:7
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586626951024&di=af629d1f6e4f7cb75ba5d62798ece92a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb912bf96dc19b3b23530ae2259b60eb6cf70083f6680b-H9l0ri_fw658',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:8
                },
                {
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586626951024&di=9d7a380c838ddc10bd628d2cce820562&imgtype=0&src=http%3A%2F%2Fwww.goumin.com%2Fattachments%2Fphoto%2F0%2F0%2F61%2F15705%2F4020605o2.jpg',
                    describe:'描述描述描述描述描述描述描述描述描述描述描述描述',
                    id:9
                }
            ]
        }
    }

    //tab切换
    tab_event(index){
        this.setState({
            index:index
        })
    }
    render(){
        return (
            <div className="header_content">
                <Layout>
                    <Header>
                        <Top/>
                    </Header>
                    <Content>
                        <div className="tabs">
                            <div className="tabs_left" style={{'color':(this.state.index===1?'#1890ff':'#333'),'borderBottom':(this.state.index===1?'1px solid #1890ff':'1px solid #ddd')}} onClick={this.tab_event.bind(this,1)}>
                                主题光影素材
                            </div>
                            <div className="tabs_right" style={{'color':(this.state.index===2?'#1890ff':'#333'),'borderBottom':(this.state.index===2?'1px solid #1890ff':'1px solid #ddd')}} onClick={this.tab_event.bind(this,2)}>
                                地面互动素材
                            </div>
                        </div>
                        <div className="content_box">
                            <Tablebox state={this.state} />
                            <Video state={this.state.videoList}/>                
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}
export default Home