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
/*var mostarOcultar = function(divtexte) {
	var text1 = document.getElementById(text1);
	var text2 = document.getElementById(text2);
	var text3 = document.getElementById(text3);
<<<<<<< HEAD
	 if (text1.style.display == "block" ) {
		text2.style.display = "none";
		text3.style.display = "none";
	 }
	   else	if(text2.style.display == "block"){
		text1.style.display = "none";
		text3.style.display = "none";
	}
    else if(text3.style.display == "block"){
	text1.style.display = "none";
	text2.style.display = "none";
}
*/


//para determinar el resultado//
var correctas= "";
function result(){
	var uno = document.getElementsByName('quizz1');
	var dos = document.getElementsByName('quizz2');
	var tres = document.getElementsByName('quizz3');
	var a = document.getElementsByName('test1');
	var b = document.getElementsByName('test2');
	var c = document.getElementsByName('test3');
	var buenas =[uno[1].checked, dos[2].checked, tres[2].checked];
	var buenas2 = [a[0].checked, b[1].checked, c[2].checked];  //repuestas correctas en un array
	for(var i=0; i<=buenas.length;i++){
		if(buenas[i]==true){
			correctas+=1;
		}else{
			correctas;
		}            //la idea es sumar uno a correctas si al marcar el test coincide con la correcta
	}
				console.log(correctas);
}
result();

=======

	 if (text1.style.display == "block" ) {
		text2.style.display = "none";
		text3.style.display = "none";
	 }
	   else	if(text2.style.display == "block"){
		text1.style.display = "none";
		text3.style.display = "none";
	}


    else if(text3.style.display == "block"){
	text1.style.display = "none";
	text2.style.display = "none";
}
*/


//para determinar el resultado//
var correctas = 0;
function result(){
	var uno = document.getElementsByName('quizz1');
	var dos = document.getElementsByName('quizz2');
	var tres = document.getElementsByName('quizz3');
	var a = document.getElementsByName('test1');
	var b = document.getElementsByName('test2');
	var c = document.getElementsByName('test3');
	var buenas =[uno[1], dos[2], tres[2], a[0], b[1], c[2]];  //repuestas correctas en un array
	for(var i=0; i<=buenas.length;i++){
		if(buenas[i].checked==true){
			correctas += 1;
		}                         //la idea es sumar uno a correctas si al marcar el test coincide con la correcta
	}
		console.log(correctas);
}
result();

>>>>>>> e8baf57bc913c67851344f123635024ee1c4dfb5
function enviarQuizz(){
	var ok = document.getElementById('ok');
   ok.addEventListener('click', result);
	 resultado.innerHTML= "Tienes " + correctas + " correctas"; //lo q debe mostrarse en la pagina.
	 console.log("vamos por buen camino");//para verificar si la funcion corre
	  }
		enviarQuizz();
