

var botaoCalcular = document.querySelector("#btnCalcular");
botaoCalcular.addEventListener("click",function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-calculo");

    console.log(form);

    var horasDias = form.tDiario.value;    var diasEfetivos = form.dEfetivos.value;
    var diasFerias = form.dFerias.value;
    var valorTotal = form.vTotal.value;

    valor = calculaValor(horasDias,diasEfetivos,diasFerias,valorTotal);


    function calculaValor(horasDias,diasEfetivos,diasFerias,valorTotal){
        var valor = 0;
        valor = horasDias * diasEfetivos *diasFerias + valorTotal;

        return valor.toFixed(2);
    }

});



