String.prototype.reverse = function () {
    var reversedString = [];
    for (var i = 0; i < this.length; i++) {
        reversedString.push(this[this.length - i - 1]);
    }
    var reversedJointString = reversedString.join('')
    return reversedJointString;
}

var nombre = 'Agustin';
console.log(nombre.reverse());
