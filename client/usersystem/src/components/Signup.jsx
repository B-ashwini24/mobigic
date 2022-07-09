import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const Signup = () => {
    
        const onFinish = (values) => {
          console.log('Success:', values);
         axios.post("http://localhost:4010/auth/register",values).then(response=>{
            console.log(response.data)
          }).catch(err=>{
            console.log(err)
          })

        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
  return (
<div style={{marginLeft:'30%',marginTop:'10%'}}>
<h1>Signup Page</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 8}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 
    <Form.Item
    label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
 
    <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email id!' }]}
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
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Signup