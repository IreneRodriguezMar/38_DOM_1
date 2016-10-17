function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	
	if(name === ""){
		alert("Escriba su Nombre!");
		return false;
	}
	if(apellido === ""){
		alert("Escriba su Apellido!");
		return false;
	}
	if(correo === ""){
		alert("Escriba su Correo!");
		return false;
	}
}
var name = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;

function primeraMayuscula(){
	if( !(/^\[A-Z][a-zA-Z]$/.test(valor)) ) {
  return false;
}
}

var = document.getElementById("input-password").value;
function soloSeisCaracteres(){
	if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]) {
  return false;
}
}
 

 
