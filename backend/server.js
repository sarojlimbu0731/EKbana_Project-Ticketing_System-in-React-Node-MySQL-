const express =require("express")
const cors= require("cors")

const app=express()

var corsOption={
    origin:'https://localhost:8001'
}

//middleware
app.use(cors(corsOption))

app.use(express.json())

app.use(express.urlencoded({extended:true}))


 
//router for bususes

const router=require("./routes/busRouter.js")
// const router=require("./routes/productRouter.js")
app.use('/api/v1',router)


app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage= err.message || "something went wrong"
 res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
 })
})

//testing api

app.get('/',(req,res)=>{
    res.json({message: 'hello from home api'})
})

//port

const PORT =process.env.PORT || 8000


//server
app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
} )