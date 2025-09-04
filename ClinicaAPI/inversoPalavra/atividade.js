function desafio (array){
    resultado = []
    for (let i = 0; i < array.length; i++){
        for (let j=0; j < array.length; j++){
            if (i !== j){
                resultado[i] = !resultado[i]?
                array[j] : resultado[i] * array[j]
            };
        }
    }
    return resultado
}

console.log(desafio([1, 2, 3]))
