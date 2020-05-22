
var campos = [

    document.querySelector('input#tDiario').value,
    document.querySelector('input#dEfetivos').value,
    document.querySelector('input#dFerias').value,
    document.querySelector('input#vTotal').value,

]

console.log(campos);

function calcular(){

   var n1 = Number(campos[0])
   var n2 = Number(campos[1])
   var n3 = Number(campos[2])
   var n4 = Number(campos[3])

    var resultado = (n4 / (n2 * 4 * n1)) + ((n3 * n2 * n1))


    res.innerHTML = "O valor final é:  " + resultado

}