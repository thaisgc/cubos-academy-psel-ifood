function solucao(obras) {
    obras.sort((a,b)=> a.valor - b.valor)
    console.log(obras[0])
}