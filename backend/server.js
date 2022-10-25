const express =require("express")
const cors= require("cors")
const cookieParser= require("cookie-parser")
const app=express()

var corsOption={
    origin:'https://localhost:8001'
}

//middleware
app.use(cors(corsOption))

app.use(cookieParser())
app.use(express.json())

app.use(express.urlencoded({extended:true}))


 

const bRouter=require("./routes/busRouter.js")
//---middleware for buses----
app.use('/api/v1/buses',bRouter)

//---middleware for auth----
const aRouter=require('./routes/authRouter.js')
app.use('/api/v1/auth',aRouter)

// ------middleware for users-------
const uRouter=require('./routes/userRouter.js')
app.use('/api/v1/users',uRouter)

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