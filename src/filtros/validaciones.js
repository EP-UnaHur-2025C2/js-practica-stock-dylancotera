const reglas = [
    {
        fn: "stock",
        values: (prod,valor) => (prod.stock > valor.min && prod.stock < valor.max) 
    },
    {
        fn: "precio",
        values: (prod,valor) => (prod.precio <= valor)
    },
    {
        fn: "nombre",
        values: (prod,valor) => (prod.nombre.length > valor.min && prod.nombre.length < valor.max)
    },
    {
        fn: "categoria",
        values: (prod,valor) => (valor.includes(prod.categorias))
    }
]


module.exports = reglas