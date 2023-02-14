function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    var cont = 0;
    for (var i=1; i<=num; i++) {
        if (num % i === 0) {
            cont = cont + 1;
            //console.log(num%i)
            //console.log(i);
            //console.log(cont);
        }
    }
    
    if (cont === 2 && num > 0 && num !== 0 && num !== 1) {
       return true
    } else {
       return false
    }
 }

 console.log(esPrimo(8))