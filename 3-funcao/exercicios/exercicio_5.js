function calcularSoma(valor) {
    total = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(total)
}
calcularSoma(0.1 + 0.2)