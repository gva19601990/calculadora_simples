//Principio, gera uma série de strings concatenadas por sinais aritmeticos , usando como resultado a função eval.
//Se você construir uma expressão aritmética como uma string, você pode usar eval() para calcular o resultado depois. 

function insert(num){

        var numero = document.getElementById('resultado').innerHTML; // todos os valores são mandados como string, para no final usar a função eval
        document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = ""; //  nulo
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado); // eval recebe argumento string, porem ele faz o calculo do resultado//
    } else{
        document.getElementById('resultado').innerHTML = "Vazio"
    }
}