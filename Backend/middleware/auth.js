const jwt = require('jsonwebtoken');

const Auth = async(req,res,next)=>{
    let jwtToken = req.header("Authorization");
    if(!jwtToken) return res.status(400).send("Sorry the token its invalid");

    jwtToken = jwtToken.split[' '][1];

    if(!jwtToken) return res.status(400).send("Invalid Token");

    try {
        //recordar que en el middleware validamos
        const payload = await jwt.verify(jwtToken,process.env.SECRET_KEY_JWT);
        req.user=payload;
        next();
    } catch (error) {
        return res.status(400).send("Sorry Invalid Token");
    }
}

module.exports = Auth;