
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

function mostrarListadoMonedas (base) {
    container = document.createElement("div");
    container.classlist.add("list-group");
    monedas.sort().forEach(($item) => {
        let $item = document.createElement("a")
        $item.classlist.add("list-group-item");
        $item.textContent = base;
        $item.dataset.base = base;
        $item.addEventListener("click", () => {
            if ($item.class === "list-group-item-active") {
                return undefined
            }
            $item.classlist.add("-active")
            actualizar
        })
        $item.appendChild(monedas)
    })

}

function obtenerMonedas () {
    return obtenerCambios().then(resultado => Object.keys(resultado).concat("EUR")) // Promesa. Una vez que obtengo cambios, saco las keys y agrego EUR
}

function actualizar () {
    mostrarCargando()
    obtenerCambios(obtenerFechaSeleccionada(), obtenerBaseSeleccionada())
}

function inicializar (){
    obtenerMonedas().then(mostrarListadoMonedas())
    configurarFecha()
}

inicializar()