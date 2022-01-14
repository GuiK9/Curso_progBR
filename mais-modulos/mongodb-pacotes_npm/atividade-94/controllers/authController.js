const jwt = require('jsonwebtoken')


module.exports = function (req, res, next) {

    const token = req.header('authorization-token')

    if (!token) return res.status(401).send("access denied")
    
    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = userVerified
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send("access denied")
    }


 /* try {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send("access denied")
            } else {
                req.user = decoded
                next()
            }
        })
    } catch (error) {
        console.log(error.message)
    } */

} 