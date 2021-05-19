function adicionar() {
   var span_numero = document.getElementById('numero');
   var numero = span_numero.innerHTML;

   numero = parseInt(numero) + 1;

   span_numero.innerHTML = numero;

}

function reset() {
	document.getElementById('numero').innerHTML = 0;
}

