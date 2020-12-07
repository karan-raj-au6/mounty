import mongoose from "mongoose"
import validator from 'validator'
import { timeStamp } from "console"

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name field cannot be empty!']
    },
    mobile: {
        type: String,
        //unique: [true, 'mobile already exsists!'],
        required: [true, 'mobile field cannot be empty!']
    },
    email: {
        type: String,
        //unique: [true, 'email already exsists!'],
        required: [true, 'email field cannot be empty!'],
        validate: [validator.isEmail, 'Enter valid email!']
    },
    street: {
        type: String
    },
    locality: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pincode: {
        type: String
    },
    coordinatesType: {
        type: String
    },
    coordinates: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    updatedBy: {
        type: Date
    }
});

const User = mongoose.model('User', userSchema);

export default User