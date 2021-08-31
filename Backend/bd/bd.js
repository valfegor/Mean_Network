const mongoose = require('mongoose');

const Database = async ()=>{
    try {
        await mongoose.connect,(process.env.BD_CONNECTION,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connected to mongo DB Process Ok');
    } catch (e) {
        console.log('Process Failed connect to mongo DB',e)
        throw new Error('Process Failed please check',e);
    }
}

module.exports = {Database}