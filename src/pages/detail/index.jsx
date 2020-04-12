import React from 'react';
import './index.scss'
import { Button } from 'antd';
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return (
            <div className="detail_box">
                <div className="header">
                    <h1>我只是一个素材</h1>
                </div>
                <div className="video_box">
                    <video src="https://vdept.bdstatic.com/63314b34567134573346427862384e50/39374639566c656e/9a655a1e9abbd5fbb4b2479c32140e9d1e35835f775ed661eb17a2e6749f27b46ef48d29e9a08b25dfef36082f7cc411.mp4?auth_key=1586681816-0-0-536407966cc29a349c0ab3d7ac918b51" controls="controls"></video>
                </div>
                <div className="describe">
                    <div className="left">
                        <h1>文字描述：<span>xx</span></h1>
                        <h1>格式：<span>xx</span> 分辨率：<span>xx</span></h1>
                    </div>
                    <div className="right">
                        <Button type="primary">点击下载</Button>
                        <h1>下载需要100积分</h1>
                    </div>
                    <div className="prompt">
                        <h1>温馨提示：<span>xx</span></h1>
                    </div>
                </div>
                <div className="img_box">
                    <h1>效果图例</h1>
                    <img src="" alt=""/>
                </div>
            </div>
        )
    }
}
export default Detail