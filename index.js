const express =require('express')
const app = express()

app.get('/api', (req, res)=>{
    res.send('1111')
})

app.listen(5000,()=>{
    console.log('app up')
})