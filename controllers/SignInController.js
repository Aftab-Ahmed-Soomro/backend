import userModel from "../models/userModel.js"

async function userSignInController(req,res) {
    try {
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if (!user) {
            res.status(400).json({
                error : true,
                success : false,
                message : "User is not registered"
            })
        } 

        if (!email || !password) {
            res.status(400).json({
                error : true, 
                status : false,
                message : "Please Provide all credentials"
            })
        }

        if (password == user.password) {
            res.status(200).json({
                success : true,
                error : false,
                message : "Logged In Successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            error : true,
            success : false,
            message : error || error.message
        })
    }
}

export default userSignInController