var coder = prompt("¡Bienvenida a LABORATORIA!\n¿Cual es tu nombre?");

var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}
