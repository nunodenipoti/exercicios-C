function imprimirNumero() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');
    
    // Exibindo o número inteiro
    resultado.innerText = "Número inteiro: " + numero;
    
    // Limpando o campo de entrada
    document.getElementById('numero').value = '';
  }
  