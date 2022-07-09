import { Space, Table, Tag,Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'antd';
import { Button, Modal } from 'antd';





const Show = () => {
    const [data,setData]=useState([])
   
    
const columns = [
 
  {
    title: 'File',
    key: 'profilePicture',
    render: (row, record) => (
     <img width="50px" height="50px" src={`http://localhost:4010/${record.profilePicture}`}/>
  //   <img width="50px" height="50px" src={`${record.profilePicture}`}/>
    ),
  },
  
  
  {
    title: 'Action',
    key: '_id',
    render: (row, record) => (
      <Space size="middle">
       
       <Button type="primary" onClick={()=>downloadfile(record)}>Download</Button>
      </Space>
    ),
  },
];

const downloadfile=(data)=>{
 console.log(data.num)
  axios.get(`http://localhost:4010/file/download`,data.num).then(response=>{
    console.log("file downloaded")
    
  
  }).catch(err=>{
    console.log(err)
  })
  
}


    useEffect(()=>{
        axios.get(`http://localhost:4010/file/getdata`).then(response=>{
            console.log(response.data)
            setData(response["data"].data)
        }
        ).catch(err=>{
            console.log(err)
        })
    },[])

   
    return(
        
       <div style={{marginLeft:'100px',marginTop:'100px'}}>  
       <h1>File Details</h1>
      <Row >
      <Col span={6} offset={6}>
    <Table columns={columns} dataSource={data} />
    </Col>
    
    </Row>
    
  </div> 
    )
    }


export default Show;