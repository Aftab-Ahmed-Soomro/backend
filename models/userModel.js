import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : String
}, {
    timestamps : true
})

const userModel = mongoose.model("register",userSchema)

export default userModel