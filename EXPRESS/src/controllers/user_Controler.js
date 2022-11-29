const express = require("express")
const User = require("../schemas/user")

exports.cadastrar = async (req, res) =>{
    const {idUser,nomeUser,email,senha,status} = req.body
    try {
        const user = {
            idUser,
            nomeUser,
            email,
            senha,
            status,
        }

     await User.create(user)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}
