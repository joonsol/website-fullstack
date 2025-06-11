require("dotenv").config()
const cookieParser=require("cookie-parser")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors=require("cors")
const PORT = 3000;

const userRoutes =require("./routes/user")
const contactRoutes =require("./routes/contact")
const postRoutes = require("./routes/post");
const uploadRoutes = require("./routes/upload");


app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/auth",userRoutes)
app.use("/api/contact",contactRoutes)
app.use("/api/post",postRoutes)
app.use("/api/upload",uploadRoutes)

app.get('/', (req, res) => {
  res.send("Hello World!")
})

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongoDB 연결")
}).catch((error) => console.log("DB와 연결 실패", error))


app.listen(PORT, () => {
  console.log("Server is running!")
})