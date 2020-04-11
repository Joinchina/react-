import React from 'react';

import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router} from "react-router-dom";
//引入路由控制组件
import RouterSet from './router/index.jsx'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  };
  render(){
    return (
      <div>
        我是app
      </div>
      // <Router>
      //   <RouterSet/>
      // </Router>
    )
  }
} 

export default App;
