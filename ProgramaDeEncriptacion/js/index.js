
var textosecreto = document.querySelector("textarea[id='CuadroDeTexto1']"); //document.querySelector caputura el dato ingresado en la caja de texto. 
document.getElementById("CuadroDeTexto1").focus(); //hace foco en el objeto. como textarea.focus();


function presionar_tecla() {

		tecla = event.keyCode;

		if (tecla == 13) {
			return Encriptartext();
		}
	}

function Pasartexto(cpytexto) {
	document.getElementById("CuadroDeTexto2").value=cpytexto;
}

function Limpiaryenfocar() {
	textosecreto.value ="";
	document.getElementById("CuadroDeTexto2").select();
	document.getElementById("CuadroDeTexto2").focus();
}

function Cpyalportapales() {

	document.getElementById("CuadroDeTexto2").select();
	document.execCommand('copy');
	//console.log(CuadroDeTexto2);
}

//Funciones de encriptacion y decriptacion.
function Encriptartext(){

	var cadena = textosecreto.value;

	cadena = cadena.replace(/e/gi,'enter');
	cadena = cadena.replace(/i/gi,'imes');
	cadena = cadena.replace(/a/gi,'ai');
	cadena = cadena.replace(/o/gi,'ober');
	cadena = cadena.replace(/u/gi,'ufat');
	
	console.log(cadena)
	Pasartexto(cadena);
	Limpiaryenfocar();
	}

function Desencriptar(){

	var cadena = textosecreto.value;

	var cadena = cadena.replace(/enter/gi,'e');
	var cadena = cadena.replace(/imes/gi,'i');
	var cadena = cadena.replace(/ai/gi,'a');
	var cadena = cadena.replace(/ober/gi,'o');
	var cadena = cadena.replace(/ufat/gi,'u');
	
	//console.log(cadena)
	Pasartexto(cadena);
	Limpiaryenfocar();
	}

var botonencriptar = document.querySelector("button[id='Btencrip']");
botonencriptar.onclick = Encriptartext;
//window = document.querySelector("button[id='Btencrip']"); //Toma la accion presionar tecla y la lleva al boton.
//window.onkeydown = presionar_tecla;

var botondesencriptar = document.querySelector("button[id='Btdsencrip']");
botondesencriptar.onclick = Desencriptar;

var botoncopiar = document.querySelector("button[id='Btcopiar']");
botoncopiar.onclick = Cpyalportapales;






// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"
