import {mostrarListadoMonedas, mostrarCambios} from "./ui.js"
import {obtenerMonedas, obtenerCambios} from "./api.js"
import {obtenerBaseSeleccionada, obtenerFechaSeleccionada} from "./cambios.js"
function configurarFecha () {
    const $inputFecha = document.querySelector("#fecha-input")
    // formato YYYY-MM-DD
    const hoy = (new Date().toISOString().split("T")[0]) 

    //1. HOY crea nuevo objeto "Date", max necesita el formato YYYY-MM-DD
    //2. toISOString me lo soluciona
    //3. Split en la t, da array con dos posiciones. El [0] es la izquierda

    $inputFecha.setAttribute= ("max", hoy);
    console.log($inputFecha.setAttribute)
    $inputFecha.addEventListener("change", actualizar)
}

async function actualizar () {
  //  mostrarCargando()
    mostrarCambios(await obtenerCambios(obtenerBaseSeleccionada(), obtenerFechaSeleccionada()))
}

async function inicializar (){
    mostrarListadoMonedas(await obtenerMonedas(), actualizar)
    configurarFecha(actualizar)
}

inicializar()