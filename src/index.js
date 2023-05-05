const express = require ("express")
require ("../config/Associations")
const cors = require ("cors")
const routes = require ("./routes")


const app = express ()

app.use (express.json ())
app.use (cors ())
app.use (routes)

app.listen ("3050")
console.log ("server ligado")

