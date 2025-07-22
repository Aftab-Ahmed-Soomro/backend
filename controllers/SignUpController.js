import userModel from "../models/userModel.js";

async function userSignUpController(req, res) {
    try {
        const {name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400).json({
            error : true,
            success : false,
            message : "Please Provide all field values"
        })
    }

    const existingUser = await userModel.findOne({name})

    if (existingUser) {
        res.status(400).json({
            error : true,
            success : false,
            message : "User Already Exists"
        })
    }

    const userData = new userModel({
        name, 
        email, 
        password
    })

    const savedUser = await userData.save()

    res.status(200).json({
        error : false,
        success : true,
        message : "User Created Successfully",
        data : savedUser
    })
    } catch (error) {
        console.log("Server Error", error)
        res.status(500).json({
            error : error || error.message,
            success : false,
            message : "Server Error" 
        })
    }
}

export default userSignUpController