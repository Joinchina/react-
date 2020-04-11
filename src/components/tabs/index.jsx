import React, { Component } from 'react'
import './index.scss'
import { Select } from 'antd';

const { Option } = Select;

export default class Tablebox extends Component {
    constructor(props){
        super(props)
        this.state={
            index:1
        }
    }
    handleChange(value) {
        this.setState({
            index:value
        })
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className="number_one">
                <div className="page_box">
                    {
                        this.props.state.channel.map((item)=>{
                            return (
                                <span key={item.index} className={`span ${this.state.index===item.index?'spanchoose':null}`} onClick={this.handleChange.bind(this,item.index)}>{item.name}</span>
                            )
                        })
                    }
                    <Select defaultValue="" style={{ width:120 }} onChange={this.handleChange.bind(this)}>
                        {
                            this.props.state.select.map(item=>{
                                return (
                                <Option value={item.index} key={item.index}>{item.name}</Option>
                                )
                            })
                        }
                    </Select>
                </div>
            </div>
        )
    }
}
