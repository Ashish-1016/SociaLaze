import { Router } from "express";
import { createTweet, getTweets } from "../controllers/AllControllers.js";
import { verifyToken } from "../middlewares/JWTVerification.js";

const Tweetrouter = Router()


Tweetrouter.post('/postTweet', verifyToken, createTweet)

Tweetrouter.get('/getTweets', getTweets)

Tweetrouter.put('/updateTweet/:tweetId',verifyToken,updateTweet)



const AuthRouter = Router()


AuthRouter.post('/login', loginUser)
AuthRouter.post('/signup', signupUser)










export { Tweetrouter };