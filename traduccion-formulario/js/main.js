// solo cuando se va a usar varias veces var idioma = "es";
// por eso solo se pone es en vez de idioma
function cambiarIdioma(idioma){
	var elEmail = document.getElementById("inputEmail");
	var elPassword = document.getElementById("inputPassword");
	var elPleaseSing = document.getElementById("form-signin-heading");
	var elRemenber = document.getElementById("remember");
	var elSing = document.getElementById("sing");
	
	if (idioma ==="es"){
		elPleaseSing.innerHTML = "Por favor inicia sesión";
		elEmail.innerHTML = "inputEmail";
		elPassword.innerHTML = "inputPassword";
		elRemenber.innerHTML = "remember";
		elSing.innerHTML = "Iniciar sesión";
		
		
		document.getElementById("inputEmail").setAttribute("placeholder", "Correo Electrónico");
		document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");
				
		document.getElementById("form-signin-heading").setAttribute("placeholder","Por favor inicia sesión");
		
		document.getElementById("remember").setAttribute("placeholder","Recordar datos");
		
		document.getElementById("sing").setAttribute("placeholder", "Iniciar sesión");
		
	}else if (idioma ==="en"){
	
		elPleaseSing.innerHTML = "Please sign in";
		elEmail.innerHTML = "inputEmail";
		elPassword.innerHTML = "inputPassword";
		elRemenber.innerHTML = "remember";
		elSing.innerHTML = "Sign in";
		
		
		document.getElementById("inputEmail").setAttribute("placeholder", "Please enter your email");
		document.getElementById("inputPassword").setAttribute("placeholder","Password");
		
		document.getElementById("form-signin-heading").setAttribute("placeholder","Please sign in");
		document.getElementById("remember").setAttribute("placeholder","Remember me");
		
		document.getElementById("sing").setAttribute("placeholder", "Sign in");

	}
}
	
	var btnEs = document.getElementById("btnEs");
	btnEs.innerHTML= "Español";
	//cada que haga click va a buscar la funcion que se llame onclick sucesa algo, lo que esta dentro de function
	btnEs.onclick = function(){
		cambiarIdioma("es");
		
	};
	var btnEn = document.getElementById("btnEn");
	btnEn.innerHTML = "English";
	//cada que haga click va a buscar la funcion que se llame onclick sucesa algo, lo que esta dentro de function
	btnEn.onclick = function(){
		cambiarIdioma("en");
		
	};