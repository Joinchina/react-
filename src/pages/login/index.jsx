import React from 'react';
import { Form, Input, Button} from 'antd';
import './index.scss'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    onFinish = values => {
        console.log('Success:', values);
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render(){
        return (
            <div className="form_box">
                <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Login