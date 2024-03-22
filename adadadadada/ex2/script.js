function calcularPesoIdeal() {
    var sexo = document.getElementById('sexo').value;
    var altura = parseFloat(document.getElementById('altura').value);
    var resultado = document.getElementById('resultado');
    
    var pesoIdeal;
    if (sexo === 'M') {
      pesoIdeal = idealHomem(altura);
    } else {
      pesoIdeal = idealMulher(altura);
    }
    
    resultado.innerText = "Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kilos.";
  }
  
  function idealHomem(altura) {
    return (72.7 * altura) - 58;
  }
  
  function idealMulher(altura) {
    return (62.1 * altura) - 44.7;
  }
  