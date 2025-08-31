const express = require("express")
const productos = require("../data/productos.json")
const reglas = require("./filtros/validaciones")

const app = express()
app.use(express.json())

app.get("/productos/filtrar", (req,res) => {
    res.status(200).json(productos)
})

app.post("/productos/filtrar", (req,res) => {
    const data = req.body
    const respuesta = productos.filter(p => data.every(d => {
        const reglasAUsar = reglas.find(r => r.fn === d.fn)
        if (reglasAUsar === undefined) return false
        return reglasAUsar.values(p, d.values)}
    ))
    res.status(200).json(respuesta)
})

app.listen(3000,() => {
    console.log("Servidor iniciado en puerto 3000")
})