import React from 'react'
import {Route} from "react-router-dom";

import Home from '../pages/home/index'
import Login from '../pages/login/index'
import Detail from '../pages/detail/index'
class RouterSet extends React.Component {
    render() {
        return (
            <div>
                <Route path='/' exact component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/login'  component={Login}/>
                <Route path='/detail'  component={Detail}/>                                              
            </div>

        )
    }
}

export default RouterSet