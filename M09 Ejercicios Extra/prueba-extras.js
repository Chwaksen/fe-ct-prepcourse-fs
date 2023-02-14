function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var splittedString = string.split('');
    var objFinal = {};
    alfabeto.forEach( function (letra) {
        splittedString.forEach( function (elem) {
            if (letra === elem) {
                if (objFinal[letra]) {
                    objFinal[letra] += 1;
                } else {
                    objFinal[letra] = 1;
                }
            }
        })
    })
    return objFinal
}
console.log(numberOfCharacters('dccbbbaaa'));
