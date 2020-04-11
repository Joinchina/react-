import React from 'react'
import { Modal} from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.scss'
class ModelBox extends React.Component {
  constructor(props){
      super(props)
      this.state = { 
          visible: false 
      };
  }
  componentDidUpdate(){
    //   console.log(this.props)
  }
  handleCancel = e => {
    this.props.getmodelData(false)
  };

  render() {
    return (
      <div>
        <Modal
          title="用户信息"
          visible={this.props.model}
          onCancel={this.handleCancel}
          footer={null}
        >
            <div className="info_box">
                <Avatar size="large" icon={<UserOutlined />} />
                <h1>HI:</h1>
                <h1>当前可用积分</h1>
            </div>
        </Modal>
      </div>
    );
  }
}
export default ModelBox