var elPleaseSign = document.getElementById("form-signin-heading");
var elEmail = document.getElementById("inputEmail");
var elPassword = document.getElementById("inputPassword");
var elRemember = document.getElementById("");
var elSign = document.getElementById("");
function cambiarIdioma(){
	
	document.getElementById("form-signin-heading").innerHTML = "Por favor inicia sesión";
	
	document.getElementById("inputEmail").setAttribute("placeholder", "Correo Electrónico");	
	document.getElementById("inputPassword").setAttribute("placeholder", "Contraseña");
		
	document.getElementById("").innerHTML = "Recordar datos";
	
	document.getElementById("").innerHTML = "Iniciar Sesión";
}