function solucao(obras) {
    obras.sort((a,b)=> b.valor - a.valor)
    console.log(obras[0])
}