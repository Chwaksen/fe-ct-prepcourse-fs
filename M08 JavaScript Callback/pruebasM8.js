var arrayOfStrings = ['agustin', 'baby', 'zonzo', 'alone'];
var elemConA = arrayOfStrings.map( function (elem) {
    if (elem[0] === 'a') {
       return elem
    }
})

console.log(elemConA);

