function calcularSomaProduto() {
    var soma = parseInt(document.getElementById('soma').value);
    var produto = parseInt(document.getElementById('produto').value);
    var resultado = document.getElementById('resultado');
    
    var n1 = 2;
    var n2 = (soma - n1);
    
    var novaSoma = n1 + n2;
    var novoProduto = n1 * n2;
    
    resultado.innerText = "Nova soma: " + novaSoma + ", Novo produto: " + novoProduto;
  }
  