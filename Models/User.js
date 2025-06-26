import mongoose from "mongoose";

// Define the schema for a user using Mongoose
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Firstname is required']
        //requied true with a custom message is missing.
    },

    // lastname follow the same validation as firstname
    lastName: {
        type: String,
        required: [true, 'Lastname is required']
    },

    // Age of the user, it must be a number and is required
    age : {
        type: Number,
        required: [true, 'Age is required']
    },

    // Email of the user -must be a unique string matching email patter
    email:{
        type: String,
        required: [true, 'Email is required'], //Mandatory
        unique: true, //No two users can have same email
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Simple regex to validate email
        // .+ (one or more charaters), then @ then .+ then \.(a dot), then .+
    },

    // List of hobbies- array of strings
    // Hobbies are not requied as some have it some don't
    hobbies: {
        type: [String],
        default: [] // if no hobby, then default empty array.
    }
}, 
    {timestamps: true, //Automatically add createdAt and updatedAt timestamp to each document
     strict: true
    } 

);


// Creating model name User and exporting
const User = mongoose.model('User', userSchema);
export default User