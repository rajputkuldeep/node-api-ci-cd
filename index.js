const express =require('express')
const app = express()

app.get('/api', (req, res)=>{
    res.send('api calling !')
})

app.listen(5000,()=>{
    console.log('app up')
})