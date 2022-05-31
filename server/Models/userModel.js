import mongoose from "mongoose";


const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validateEmail = (email) => emailPattern.test(email);

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            // required: true,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Username is required',
            validate: [ validateEmail, 'Please fill a valid email address'],
            match: [ emailPattern, 'Please fill a valid email address']
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        followers: [],
        following: []
    },
    { timestamps: true }
)

const UserModel = mongoose.model("users", UserSchema);
export default UserModel