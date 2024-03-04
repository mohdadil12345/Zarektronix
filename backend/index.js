
const express = require("express")
require("dotenv").config()

const cors = require("cors")
const { userRouter } = require("./routes/user.routes")
const { connection } = require("./db")

const app = express()
app.use(express.json())
app.use(cors())


app.use("/", userRouter)


app.listen(process.env.port, async () => {
      try{

        await connection

        console.log("connected to db")
        console.log(`port is running at ${process.env.port}`)

      }catch(err) {
        console.log(err)
      }
})