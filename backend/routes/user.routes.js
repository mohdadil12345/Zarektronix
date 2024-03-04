
const express = require("express")

const { UserModel } = require("../models/user.model")

require("dotenv").config()

const userRouter = express.Router()
const bcrypt = require("bcrypt")



userRouter.post("/register", async (req, res) => {

    const { password, email, name, mode } = req.body

    try {

        bcrypt.hash(password, 5, async (err, hash) => {

            const user = new UserModel({ email, password: hash, name, mode })
            await user.save()
            res.status(200).json({ msg: "Registration succesffull" })

        })


    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})



module.exports = {
    userRouter
}