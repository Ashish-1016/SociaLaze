import jwt from 'jsonwebtoken'


export function createTweet(req, res) {

    const { isLoggedIn, userId } = req.user

    if (isLoggedIn) {
        const newTweet = {
            tweetText: req.body.TweetText,
            tweetOwnerUsername: req.body.username,
            tweetOwnerUserId: userId
        }

        //Post the data to mongoose
    }
    else {
        res.status(401).json("Tweet not posted")
        //redirect user to loginpage
    }

}

export function getTweets(req, res) {
    const tweets = [{
        tweetText: "Sample servre tweet",
        tweetOwnerUsername: "testuser",
    }]
    res.json(tweets)
}

export function updateTweet(req, res) {

    const { userId, isLoggedIn } = req.user
    if (userId === req.body.tweetOwnerUserId && isLoggedIn) {
        //update the tweet
    }
    else {
        res.status(401).json("Tweet not updated")
    }

}

export function deleteTweet(req, res) {

    const { userId, isLoggedIn } = req.user
    if (userId === req.body.tweetOwnerUserId && isLoggedIn) {
        //delete the tweet
    }
    else {
        res.status(401).json("Tweet not deleted")
    }



}







export function signupUser(req, res) {

    const { username, password, name } = req.body
    const hash = bcrypt.hash(password, 10)
    //Store in DB and get the user back

    const user = null;

    if (!user) {
        res.status(400).json("Revoked Authentication")
    }
    else {
        //generate a accesstoken
        const token = jwt.sign({ user }, process.env.secretKey)
    }

}

export function loginUser(req, res) {
    const { username, password } = req.body
    const hash = bcrypt.hash(password, 10)
    //Get username & password in DB and get the user back if condition true
    //check passwords by hashed passowrd

    const user = null;
    //make a user object(Authorized) modified for the next subseq reqs 
    // {
    //     userId:_id, //don't make it public
    //     isLoggedIn:true
    // }

    if (!user) {
        res.status(400).json("Revoked Authentication")
    }
    else {
        //generate a accesstoken
        const token = jwt.sign({ user }, process.env.secretKey)
        res.json({
            username: user.username,
            _accessToken: token

        })
    }


}