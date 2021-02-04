
function configurarFecha () {
    const $inputFecha = document.querySelector("#fecha-input")
    // formato YYYY-MM-DD
    const hoy = (new Date().toISOString().split("T")[0]) 

    //1. HOY crea nuevo objeto "Date", max necesita el formato YYYY-MM-DD
    //2. toISOString me lo soluciona
    //3. Split en la t, da array con dos posiciones. El [0] es la izquierda

    $inputFecha.setAttribute= ("max", hoy);
    console.log($inputFecha.setAttribute)
   // $inputFecha.addEventListener("change", actualizar)
}

function obtenerCambios (base = "EUR", fecha = "latest"){ // Parametros por default 
    const BASE_URL = "https://api.exchangeratesapi.io"
    return fetch(`${BASE_URL}/${fecha}?base=${base}`)
    .then(r => r.json())
    .then(r => r.rates) // sacamos el objetos de rates para despues sacarle la key
}

function mostrarListadoMonedas (cambios) {
    let containerDerecha = document.querySelector("#container-derecha");
    containerDerecha.classList.add("list-group");
    cambios.sort().forEach((moneda) => {
        let $item = document.createElement("a")
        $item.classList.add("list-group-item");
        $item.textContent = moneda;
        $item.dataset.base = moneda;
        $item.addEventListener("click", () => {
            if ($item.class === "list-group-item-active") {
                return undefined
            }
            $item.classList.add("-active")
            actualizar
        })
        $item.appendChild(containerDerecha)
    })

}

function obtenerFechaSeleccionada () {
    const fechaSeleccionada = document.querySelector("#fecha").value;
    return fechaSeleccionada || undefined;
}
function obtenerBaseSeleccionada () {

}

function obtenerMonedas () {
    return obtenerCambios().then(resultado => Object.keys(resultado).concat("EUR")) // Promesa. Una vez que obtengo cambios, saco las keys y agrego EUR
}

function actualizar () {
    mostrarCargando()
    obtenerCambios(obtenerBaseSeleccionada(), obtenerFechaSeleccionada())
}

function inicializar (){
    obtenerMonedas().then(resultado => mostrarListadoMonedas(resultado))
    configurarFecha()
}

inicializar()