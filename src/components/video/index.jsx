import React, { Component } from 'react'
import './index.scss'
import { BrowserRouter as Router,Link  } from "react-router-dom";
export default class Video extends Component {
    constructor(props){
        super(props)
        this.state={
            index:1
        }
        console.log(props)
    }
   
    render() {
        return (
            <div className="video_box">
                <Router>
                    {
                        this.props.state.map((item,index)=>{
                            return(
                                <Link to={`/detail?id=${item.id}`}>
                                    <div className="video" key={index}>
                                        <div className="img_box">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <p>{item.describe}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }                                    
                </Router>
            </div>
        )
    }
}
