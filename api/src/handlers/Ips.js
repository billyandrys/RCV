const { ips } = require('../db')

const createIps =  async(req, res)=>{
    const { address, name , phone, email } = req.body
    let validateIps = await ips.findOne({
        where: { name : name }
    })
    if( validateIps === null ){
        try{
            const IpsCreated =  await ips.create({
                name,
                address,
                phone,
                email,
                status: true
            })
            res.status(200).json({'Ips created': IpsCreated })
        }catch(e){
            res.status(401).json({ 'Error' : e.message.Error });
        }
    }else{
        res.status(400).json({'Error': 'IPS already exists'})
    }
}

const allIps = async (req, res)=>{
    const { id } = req.params;
      try{
        if(!id){
            const allIps = await ips.findAll()
            res.status(200).json({message:allIps})


        }else{
            const ipsId = await ips.findAll({
                where: { id:id }
            })

            if(!ipsId){
                res.status(401).json({message:"No found Ips"})
            }else{
                res.status(200).json({message:ipsId})
            }
        }

    }catch(e){
    res.status(401).json({message:e.message})
    }

}
const updateIps = async(req, res)=>{
    const { id, name, address, phone, email } = req.body
   

    try{
        const ipsUpdate = await ips.update({name, address, phone, email}, {
            where: { id : id }
        })
        res.status(200).json({message:`update ssuccess ${ipsUpdate}`})
    }catch(e){
        res.status(401).json({message:e.message})
    }

}

const updateStatus = async(req, res)=>{
    const { id, status } = req.body
    try{
        const updateStatus = await ips.update({
           status 
        },{
            where:{
                id 
            }
        })

        res.status(200).json({message:`change status whit ssuccess`})

    }catch(e){
        res.status(401).json({message:`error not change status`})

    }
}



module.exports = { createIps, allIps, updateIps, updateStatus}