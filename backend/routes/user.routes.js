
const express = require("express")

const { UserModel } = require("../models/user.model")

require("dotenv").config()

const userRouter = express.Router()
const bcrypt = require("bcrypt")








    userRouter.post("/register", async (req, res) => {

        const { password, email, name, mode } = req.body

        try {
            const user = await UserModel.findOne({ email })
    
            if (user) {
    
                res.status(400).json({ msg: "User already exist, please login" })
    
            } else {
                bcrypt.hash(password, 5, async (err, hash) => {
                    if (hash) {
                        const user = new UserModel({ email, password: hash, name, mode })
                        await user.save()
                        res.status(200).json({ msg: "Registration succesffull", user })
                    }
                })
            }
    
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    })
    


    // const { password, email, name, mode } = req.body

    // try {

    //     bcrypt.hash(password, 5, async (err, hash) => {

    //         const user = new UserModel({ email, password: hash, name, mode })
    //         await user.save()
    //         res.status(200).json({ msg: "Registration succesffull", user })

    //     })


    // } catch (error) {
    //     res.status(400).json({ error: error.message })
    // }



module.exports = {
    userRouter
}