//preguntar el nombre al usuario
var name = prompt("¿Cuál es tú nombre");
//Cambiar name a mayusculas y guardarlo en la variable name2
var name2 = name.toUpperCase();
//Muestra un mensaje de confirmación, con el nombre del usuario, para ver si el usuario desea jugar
var option = prompt("Bienvenida " + name2 +"\n ¿Desea jugar?"+"\n 1. SI"+ "\n 2. NO");
//Condicional, si desea juagar el usuario
if (option==1){

//se crean las variables para las respuestas que ingresa el usuario por cada pregunta
//Cambia lo que introduce el usuario a mayusculas y lo guarada en nuevas variable
  var question1 = prompt("¿Qué super heroe se pone verde cuando se enoja?");
  var option1 = question1.toUpperCase();
  var question2 = prompt("¿Qué super heroe lanza telaraña?");
  var option2 = question2.toUpperCase();
  var question3 = prompt("¿Quién fue el primer vengador?");
  var option3 = question3.toUpperCase();
//condicional que evalua las respuestas del usuario
if (option1=="HULK"){
  document.getElementById('answer1').innerHTML = "Correcta: " + option1;
}else{
  document.getElementById('answer1').innerHTML =  "Incorrecta:  " + option1;
}
if (option2=="SPIDERMAN"){
  document.getElementById('answer2').innerHTML =  "Correcta: " + option2;
}else{
  document.getElementById('answer2').innerHTML =  "Incorrecta: " + option2;
}
if (option3=="CAPITAN AMERICA"){
  document.getElementById('answer3').innerHTML =  "Correcta: " + option3;
}else{
  document.getElementById('answer3').innerHTML =  "Incorrecta: " + option3;
}
//si no se cumple la primera opción se reaaliza la segunda opción
}else if (option!=1){
  alert("NOS VEMOS MAS TARDE");
  document.getElementById('answer1').style.display = "none";
  document.getElementById('answer2').style.display = "none";
  document.getElementById('answer3').style.display = "none";
}
