
const mongoose = require("mongoose")

const userSchema = ({
     name : String,
     email : String,
     password : String,
     mode : String
})

const UserModel = mongoose.model("user", userSchema )

module.exports = {
    UserModel
}