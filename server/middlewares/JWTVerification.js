import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {

    if (!authorization) {
        res.status(401).json("Not Authorized to do this action")
    }
    else {
        const authorization = req.headers.authorization
        const token = authorization.split(" ")[1]
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                res.status(403).json("Token expired or not valid")
            }
            else{
                req.user=user
                next()
            }
        })

    }


}