var campos = [

    document.querySelector('#tDiario'),
    document.querySelector('#dEfetivos'),
    document.querySelector('#dFerias'),
    document.querySelector('#vTotal'),
    document.querySelector('#result')

]

console.log(campos);

var tbody = document.querySelector('table tbody');


campos.forEach(function (campo) {

    var divTotal = document.createElement('div');

    divTotal.textContent = campo.value;

})

    document.querySelector('.form').addEventListener(
        'submit', function (event) {

            alert('oi');
        });
