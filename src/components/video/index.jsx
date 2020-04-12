import React, { Component } from 'react'
import './index.scss'
import { BrowserRouter as Router } from "react-router-dom";
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
                                <a href={`/detail?id=${item.id}`} key={index} target='_blank' rel="noopener noreferrer">
                                    <div className="video" >
                                        <div className="img_box">
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <p>{item.describe}</p>
                                        </div>
                                    </div>
                                </a>
                                // <Link to={`/detail?id=${item.id}`}  key={index}>
                                //     <div className="video" >
                                //         <div className="img_box">
                                //             <img src={item.img} alt=""/>
                                //         </div>
                                //         <div className="text_box">
                                //             <p>{item.describe}</p>
                                //         </div>
                                //     </div>
                                // </Link>
                            )
                        })
                    }                                    
                </Router>
            </div>
        )
    }
}
