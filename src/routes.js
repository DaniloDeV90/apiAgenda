
const express = require ("express")
require ("dotenv").config ()
const jwt = require ("jsonwebtoken")

const visualizar = require("./Controllers/visualizar")
const CriarUser = require("./Controllers/CriarUser")
const SearchUser = require("./Controllers/SearchUser")
const AddAgenda = require("./Controllers/AddAgenda")
const LoginUser = require("./Controllers/LoginUser")
const DeleteTable = require("./Controllers/DeleteTable")
const EditarAgenda = require("./Controllers/EditarAgenda")



const routes = express.Router ()


function checkToken (req,res,next) {
    const autHeader = req.headers ['authorization']
    const token = autHeader && autHeader.split (" ")[1]

    if (!token) {
        return res.status(401).json ({msg: "acesso negado!"})
    }

    try {
       const secret = process.env.SECRET
       jwt.verify (token,secret)
       
       next ()
    } catch (error) {
        res.send ({msg: false})
    }
}

//Criar Usuario
routes.post ("/createdUser", CriarUser)

//Procurar Usuario
routes.get ("/searchUser/:id", SearchUser)

//Verificar Token do Usuario
routes.get ('/user/:id', checkToken, visualizar)


//Adicionar uma Agenda a um Usuario

routes.post ("/addAgenda/:idUser", AddAgenda)

//Apagar Tabela do Usuario
routes.delete ("/DeleteTable/:id/:IdTableDelete", DeleteTable)
//Login

routes.post ("/Login",LoginUser )

//Editar Tabela do Usuario
routes.put ("/EditTable/:id", EditarAgenda)
//Export
module.exports = routes


