import { Space, Table, Tag,Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'antd';
import { Button, Modal } from 'antd';
import fileDownload from 'js-file-download';


const Fileupload = () => {
    const [file,setFile]=useState("")
    const [filename,setFilename]=useState("")
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
             
             <Button type="primary" onClick={()=>downloadfile(row._id)}>Download</Button>
            </Space>
          ),
        },
      ];
      
      const downloadfile=(id)=>{
        console.log("filename")
       
       axios({
        url:"http://localhost:4010/file/getdata",
        method:'GET',
        responseType:'blob'
       }).then((res)=>{
            fileDownload(res.data,filename)
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
          },[data])
      
         
    const onfilechange=(event)=>{
        setFilename(event.target.files[0].name)
        setFile(event.target.files[0])
        }
        let num=Math.floor(100000+Math.random()*900000)
        const formdata=new FormData()
        formdata.append("file",file)
        formdata.append("num",num)
        formdata.append("filename",filename)
        const configobj={
            headers:{
                'Content-Type':'multipart/form-data'
            }
          }
       const clickhandler=()=>{
           console.log("filedata"+file)
            axios.post(`http://localhost:4010/file/upload`,formdata,configobj).then(response=>{
            console.log(response.data)
            }).catch(err=>{
            console.log(err)
            })
        }
  return (
   <>
    <div style={{marginTop:'200px',marginLeft:'300px'}}>
         <h1>File upload</h1><br/>
         <input type="file" onChange={onfilechange}/><button onClick={clickhandler}>Upload</button></div>
         <div style={{marginLeft:'100px',marginTop:'100px'}}>  
       <h1>File Details</h1>
      <Row >
      <Col span={6} offset={6}>
    <Table columns={columns} dataSource={data} />
    </Col>
    
    </Row>
    
  </div> 
         </>
  )
}

export default Fileupload