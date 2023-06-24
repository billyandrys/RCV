const { user } = require('../db')

const createUser = async (req, res)=>{
    const { username, email, password } = req.body
    
    const validateUser = await user.findOne({
        where:{
             email: email
        }
    })
    if( validateUser === null){
        try{
            const userCreate = await user.create({
                username,
                email,
                password,
                status:true
            })

             res.status(200).json({message: userCreate})
        }catch(e){
            res.status(401).json({message: `error ${e.message}`})
        }
    }else{
        res.status(401).json({ message: `email existe${email}` })
    }
    

}


const updateUserAdmin = async (req, res)=>{
    const { id , name , email , password } = req.body

    try{
        const updateUser = await User.update({
            name,
            email,

        }, {
            where:{ id }
        })
        res.status(200).json({ message:updateUser})
    }catch(e){
        res.status(200).json({ message:e.message })
    }
}


const updateStatus = async(req, res)=>{
    const { id } = req.body
    try{
        const userUpdateStatus = await user.update({
            status: false
        }, {
            where: {
                id
            }
        })

        res.status(200).json({message: `Update ssuccess status ${userUpdateStatus}`})
    }catch(e){
        res.status(401).json({message: e.message})
    }
}


const allUsers = async (req, res)=>{

    const { id } = req.query

    if(!id) {
        try{
            const allUsers = await user.findAll()
    
            res.status(200).json({message:allUsers })
        }catch(e){
            res.status(401).json({message:e.message})
        }
    }else{
        try{
            const idUser = await user.findOne({
                where: {id}
            })
            res.status(200).json({message:idUser})
            
        }catch(e){
            res.status(401).json({message:e.message})
        }
    }


    
}

module.exports = {
    createUser,
    updateUserAdmin,
    updateStatus,
    allUsers
}



