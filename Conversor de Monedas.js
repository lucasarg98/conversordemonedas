function convertir() {
  var valor = parseInt(document.getElementById("valor").value);
  var resultado = 0;
  var dolar = 285;
  var euro = 147.70;
  if (document.getElementById("uno").checked){
    resultado = valor / dolar;
    alert("El cambio de pesos a Dolar es: " + resultado.toFixed(2));
  }
  else if (document.getElementById("dos").checked){
    resultado = valor / euro;
    alert("El cambio de pesos a Euro es: " + resultado.toFixed(2));
  }
  else {
    alert("Los requerimientos son imprecisos");
  }
}

