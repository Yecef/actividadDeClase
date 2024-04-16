console.log("Hola, soy la actividad de hoy")

const edadInput = document.getElementById("edadInput"); 
console.log(edadInput);

const mensaje = document.getElementById("mensajeEdad");
console.log(mensaje);


const btn = document.getElementById("boton");

console.log(btn);

function verificarEdad(){

//yo quiero que cada vez que le de click al boton, me salga un "hola"


console.log("entro a mi funcion verificar edad");


  //para acceder no al elemento del html sino a su malor, se debe escribir el .value
  let edad = edadInput.value;
  console.log(edad);
//UTILIZAR CONDICIONALES

  if(edad>= 18){

      //acá esto es lo que sucede si la condición es verdadera
      console.log("Eres mayor de edad");

      mensaje.textContent = "Eres mayor de edad";

  } else{
      //acá se define lo que sucede cuando la condición es falsa
      console.log("Eres menor de edad");

      mensaje.textContent = "Eres menor de edad";
  }
}


 


