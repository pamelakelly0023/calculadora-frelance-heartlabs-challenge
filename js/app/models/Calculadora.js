class Calculadora{

    //*<form class="form" action="js/index.js" method="get" id="form-calculo">

    //*<input type="submit" id="btnCalcular" name="btnCalcular" value="Calcular" />

   //*<form class="form" onsubmit="CalculadoraController.calcular(event)">

    //*form class="form" action="js/app/controllers/CalculadoraController.js"

   //*<input type="submit" id="btnCalcular" name="btnCalcular" value="calcular" />

    constructor(diaria, diasEfetivos,diasFerias, valorTotal) {

        this._diaria = diaria;
        this._diasEfetivos = diasEfetivos
        this._diasFerias = diasFerias;
        this._valorTotal = valorTotal;
    }

    obtemResultado(){

        return this._diaria * this._diasEfetivos;
    }

    get diaria(){

        return this.diaria;
    }
    get diasEfetivos(){

        return this._diasEfetivos
    }
    get diasFerias(){

        return this._diasFerias
    }
    get valorTotal(){

        return this._valorTotal;
    }

}
