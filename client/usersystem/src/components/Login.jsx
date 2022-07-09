import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
        const onFinish = (values) => {
          console.log('Success:', values);
          axios.post("http://localhost:4010/auth/login",values).then(response=>{
            console.log(response.data)
            localStorage.setItem("token",response.data.token)
            navigate("/Fileupload")
          }).catch(err=>{
            alert("login failed")
          })
           
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
  return (
<div style={{marginLeft:'30%',marginTop:'10%'}}>
<h1>Login Page</h1>
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

export default Login