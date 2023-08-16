import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const TweetSchema = mongoose.Schema({
    tweetText: {
        type: String,
        required: true
    },
    tweetOwnerUserName:{
        type:String,
        required:true
    },
    tweetOwnerUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserModel'
    },
})

const TweetModel = mongoose.model('tweets', TweetSchema)

export { TweetModel }

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
});

const UserModel = new mongoose.model('users', UserSchema)

export { UserModel }