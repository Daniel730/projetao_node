const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const usuario = mongoose.model("usuario", userSchema);
module.exports = usuario;