const dao = require('../Dao/Connection')
/*function*/


const signIn = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
try{
    if(req.body.username && req.body.password){

        const signIn= await dao.sequelize.query(
            `select * from users where username= '${username}' and password='${password}'`, { raw: true, nest: true }
            
        )
        return res.status(200).send(signIn)

    }
    return res.status(200).send([])
}catch(error){
    return res.status(500).send(error)
}
    




    
    return res.status(200).send('sign in success!!')
}







module.exports = {
    signIn,
}