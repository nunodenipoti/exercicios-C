function calcularQuadrado() {
  var num = parseInt(document.getElementById('numero').value);
  var res = quadrado(num);
  document.getElementById('resultado').innerText = `O quadrado de ${num} é: ${res}`;
}

function quadrado(x) {
  return x * x;
}
