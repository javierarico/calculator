//Creamos las variables asociandolas por id
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const igual = document.getElementById("igual");
const clear = document.getElementById("clear");
let resultado = document.getElementById("resultado");

let num1;
let num2;
let operacion;

//Eschucha si algun numero u operador es clickeado y lo muestra en resultado(pantalla)
function numerosApretados(){
	uno.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 1;});
	dos.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 2;});
	tres.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 3;});
	cuatro.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 4;});
	cinco.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 5;});
	seis.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 6;});
	siete.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 7;});
	ocho.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 8;});
	nueve.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 9;});
	cero.addEventListener('click', function(){resultado.innerHTML = resultado.innerHTML + 0;});	
}

function operadoresApretados(){
	suma.addEventListener('click', function(){
		num1 = resultado.innerHTML;
		operacion = "+";
		limpiarPantalla();
	});

	resta.addEventListener('click', function(){
		num1 = resultado.innerHTML;
		operacion = "-";
		limpiarPantalla();
	});

	multiplicacion.addEventListener('click', function(){
		num1 = resultado.innerHTML;
		operacion = "*";
		limpiarPantalla();
	});

	division.addEventListener('click', function(){
		num1 = resultado.innerHTML;
		operacion = "/";
		limpiarPantalla();
	});

	igual.addEventListener('click', function(){
		num2 = resultado.innerHTML;
		igualar();
	});

	clear.addEventListener('click', function(){
		resetear();
	});
}

//Si el numero es cero, lo borra y agrega los numeros u operadores a la pantalla sin sumar.
if (resultado.innerHTML == 0) {
	resultado.innerHTML = "";
	numerosApretados();
	operadoresApretados();
}

//calculos

function igualar(){
	var res = 0;
	switch(operacion){
		case "+":
		res = parseInt(num1) + parseInt(num2);
		break;

		case "-":
		res = parseInt(num1) - parseInt(num2);
		break;

		case "*":
		res = parseInt(num1) * parseInt(num2);
		break;

		case "/":
		res = parseInt(num1) / parseInt(num2);
		break;		
	}
	resetear();
	resultado.innerHTML = res;
}

function limpiarPantalla(){
	resultado.innerHTML = "";
}

//la funcion resetear limpia la pantalla, pero inicializa a cero num1 y num2, y limpia la variable operacion.
function resetear(){
	resultado.innerHTML = "";
	num1 = 0;
	num2 = 0;
	operacion = "";
}