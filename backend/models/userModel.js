const mongoose = require("mongoose");   // Import mongoose

const userSchema = mongoose.Schema({ // Create schema
    name: {
        type: String,
        required: [true, "Por favor insira um nome"],
    },
    email: {
        type: String,
        required: [true, "Por favor insira um email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Por favor insira um E-mail válido"
        ]
    },
    password: {
        type: String,
        required: [true, "Por favor insira uma senha"],
        minLength: [6, "A senha deve ter no mínimo 6 caracteres"],
        maxLength: [18, "A senha deve ter no máximo 18 caracteres"],
    },
    photo: {
        type: String,
        required: [true, "Por favor insira uma foto"],
        default: "https://pt.gravatar.com/userimage/131556477/8731a87936c3553705383a4d8dee0f8f.png?size=200"

    },
    phone: {
        type: String,
        default: "+55"
    },
    bio: {
        type: String,
        default: "Bio",
        maxLength: [250, "A bio deve ter no máximo 250 caracteres"],
    },


}, {
    timestamps: true,
}) 

const User  = mongoose.model("User" , userSchema); // Create model
module.exports = User; // Export model