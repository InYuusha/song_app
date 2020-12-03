const express = require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
   
app.use(cors())

app.get('/status',(req,res)=>{
    res.send({
        "msg":"This is a status Page"
    })

})

const port = process.env.PORT || 8081;
app.listen(port,()=>{
    console.log(`Server is running on http:\\\\127.0.0.1:${port}`)
})