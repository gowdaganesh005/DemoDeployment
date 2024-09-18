import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('/api/data')
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  

  return (
    <>
      <h1>BitnBuild</h1>
      <p>Data:{data.length}</p>
      {
        data.map((info,index)=>(
          <div key={data.id}>
            <h3>{info.title}</h3>
            <p>{info.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
