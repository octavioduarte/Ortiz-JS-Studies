const arrayExample = ["Octávio", "Yasmin", "Michelly", "Lu", "Gaian", "Rodrigo", "Ricardo"]


const inputContent = "Rodrigo"

// LENGTH de arrayExample = 7


// ULTIMO INDICE DE UM ARRAY SEMPRE SERÁ: array.length - 1
// length só funciona em arrays e strings

// for > De percorrer o array


let indiceOfUserOnArray = null
    
    // contador  // condicional           // incrementador    
for (let i = 0;  i < arrayExample.length ; i++ ) {

    if (arrayExample[i] === inputContent) {
        indiceOfUserOnArray = i
    }
}

console.log('>>', indiceOfUserOnArray)