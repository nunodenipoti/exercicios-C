function calcular() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    
    var resultadoSoma = numero1 + numero2;
    var resultadoMultiplicacao = numero1 * numero2;
    var resultadoParidade = (resultadoSoma % 2 === 0) ? 'P' : 'I';
    
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "A soma dos números é: " + resultadoSoma + ".<br>" +
                          "O produto dos números é: " + resultadoMultiplicacao + ".<br>" +
                          "A paridade da soma é: " + resultadoParidade + ".";
  }
  