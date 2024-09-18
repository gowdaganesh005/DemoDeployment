import express from "express"
import dotenv from 'dotenv'

const app=express()

// app.get('/',(req,res)=>{
//     res.send('Hello  world !!!')
// })

app.get('/api/data',(req,res)=>{
    const data=[
        {
            id:1,
            title: 'data 1',
            content: 'This is a data 1',
        },
        {
            id:2,
            title: 'data 2',
            content: 'This is a data 2',
        },
        {
            id:3,
            title: 'data 3',
            content: 'This is a data 3',
        },
        {
            id:4,
            title: 'data 4',
            content: 'This is a data 4',
        },
        {
            id:5,
            title: 'data 5',
            content: 'This is a data 5',
        }
    

    ]
    res.send(data)

})

app.listen(process.env.PORT,()=>{

    console.log('Server Running on port :'+process.env.PORT)
})