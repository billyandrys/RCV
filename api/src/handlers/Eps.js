const { eps } = require('../db')

const createEps = async(req, res)=>{
    const { name, address, phone, email } = req.body

    const validateEps = await eps.findOne({
        where: { name : name}
    })
    if( validateEps === null ){
        try{
            const createEps = await eps.create({
                name,
                address,
                phone,
                email,
                status:true
            })
    
            res.status(200).json({message:createEps})
        }catch(e){
            res.status(401).json({message:`error-- ${e.message}`})
        }
    }else{
        res.status(401).json({message:`exist eps ${name}`})
    }    
}

const updateEps = async (req, res)=>{
    const { id, name, address, phone, email } = req.body
      try{
      const updateEps =  await eps.update({
            name, 
            address,
            phone,
            email
        },{
            where: { id : id}
        })
        res.status(200).json({message: `update ssucess ${updateEps}`})

    }catch(e){
        res.status(401).json({message:`error update Eps ${e.message}`})
    }
}

const allEps = async(req, res)=>{
    try{
        const allEps = await eps.findAll({
            where:{status:true}
        })
        res.status(200).json({message:allEps})
    }catch(e){
        res.statsu(401).josn({message:`error ${e.message}`})
    }
}

const updateStatus = async(req, res)=>{
    const { id } = req.body

    try{
        const updateStatus = await eps.update({ status: false},{
            where : {
                id: id
            }
        })
        res.status(200).json({message: `update ssuccess ${updateStatus}`})

    }catch(e){
        res.status(401).json({message: `error ${e.message}`})
    }
}


module.exports  = {
    createEps,
    updateEps,
    allEps,
    updateStatus
}