const numeroIngresado = parseInt(prompt("Ingrese un número entero entre 1 y 20"))

const procesarNumero = function (num) {
	if (num > 20) return "Numero inválido"
	if (num < 1) return "Número inválido"
	
	for (i = 1; i <= 10; i++) {
		console.log(num + "x " + i + "= " + num * i);
	}

	let r = 1;
	let num1 = num
	for(let i = num1; i>0; i--){
		console.log(r *= i);
	}
	return

	
	// la funcion realiza el procesamiento pero no sé como formatearlo para que entregue un resultado tipo "el factorial de x es y"
   }
   console.log(procesarNumero(numeroIngresado))