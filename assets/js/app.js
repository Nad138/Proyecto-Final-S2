window.onload=function(){prompt("¡Bienvenida a LABORATORIA!\n¿Cual es tu nombre?");}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}

function  (){
	var correctas = 0;
	var uno = document.getElementsByName('quizz1');
	for(var i=0; i<uno.length;i++){
		if(uno[0]==)//la idea es sumar uno a correctas si al marcar el test coincide con la correcta
	}
}


quizz1, quizz2, quizz3, test1, test2, test3 son arrays
