class CalculadoraController{

     static constructor() {

        let $ = document.querySelector.bind(document);

        this.inputDiaria = $('#tDiario');
        this.inputDiasEfetivos = $('#dEfetivos');
        this.inputDiasFerias = $('#dFerias');
        this.inputValorTotal = $('#vTotal');

    }

     static calcular(event){

         alert ("Método calcular");

         return this.inputDiaria;
    }
}
