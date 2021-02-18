import {mostrarListadoMonedas, mostrarCambios, mostrarCargando, configurarFecha, setPrimerItemActivo} from "./ui.js"
import {obtenerMonedas, obtenerCambios} from "./api.js"
import {obtenerBaseSeleccionada, obtenerFechaSeleccionada} from "./cambios.js"


async function actualizar () {
    mostrarCargando()
    mostrarCambios(await obtenerCambios(obtenerBaseSeleccionada(), obtenerFechaSeleccionada()))
}



async function inicializar (){
    mostrarListadoMonedas(await obtenerMonedas(), actualizar)
    setPrimerItemActivo(actualizar)
    configurarFecha(actualizar)
}

inicializar()