const Role = require('../models/role');


const registerRole = async (req,res)=>{
    if(!req.body.name || !req.body.description) return res.status(400).send("Please check all the camps please ");

    const existingRole = await Role.findOne({name: req.body.name});

    if(existingRole) return res.status(400).send("The role its already created , please check in the list");

    const role = new Role({
        name: req.body.name,
        description: req.body.description,
        Status:true
    });

    const result = await role.save();

    if(!result) return res.status(400).send("Sorry cant save please try again.");

    return res.status(200).send({role});
}

const listRole = async (req,res)=>{
    const role = await Role.find();
    if(!role) return res.status(400).send("No role created");
    return res.status(200).send({role});

}

module.exports ={registerRole, listRole};