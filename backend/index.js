require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cookieParser=require("cookie-parser")
const app = express()
const cors=require("cors")
const PORT = 3000;

const userRoutes =require("./routes/user")
const contactRoutes =require("./routes/contact")
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/api/auth",userRoutes)
app.use("/api/contact",contactRoutes)

app.get('/', (req, res) => {
  res.send("Hello World!")
})

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongoDB 연결")
}).catch((error) => console.log("DB와 연결 실패", error))


app.listen(PORT, () => {
  console.log("Server is running!")
})