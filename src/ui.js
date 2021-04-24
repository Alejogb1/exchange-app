export function mostrarListadoMonedas (cambios, callback) {
    let $container = document.createElement("div");
    $container.classList.add("list-group");
    cambios.sort().forEach((moneda) => {
        let $item = document.createElement("a")
        $item.classList.add("list-group-item", "list-group-item-action");
        $item.textContent = moneda;
        $item.dataset.base = moneda;

        $item.addEventListener("click", () => {
            const $itemActivo = document.querySelector(".list-group-item.active")
            if ($itemActivo) {
                console.log("borramos: ", $item)
                return $itemActivo.classList.remove("active")
            }
            $item.classList.add("active")
            callback(moneda)
        })
        $container.appendChild($item)
    })
    document.querySelector("#monedas").appendChild($container)
}
export function mostrarCambios(cambios) {
    const $cambios = document.querySelector('#cambio');
    $cambios.innerHTML = ""
    Object.keys(cambios).sort().forEach((moneda) => {
        console.log("creando fila y monedas")
      const $fila = document.createElement('tr');
      const $moneda = document.createElement('td');
      const $cambio = document.createElement('td');
      $moneda.textContent = moneda;
      $cambio.textContent = cambios[moneda];
      $fila.appendChild($moneda);
      $fila.appendChild($cambio);
      $cambios.appendChild($fila);
    });
}

export function mostrarCargando () {
    document.querySelector("#cambio").innerHTML = "Cargando..."

}

export function configurarFecha (callback ) {
    const $inputFecha = document.querySelector("#fecha-input")
    // formato YYYY-MM-DD
    const hoy = (new Date().toISOString().split("T")[0]) 
    console.log(hoy)
    //1. HOY crea nuevo objeto "Date", max necesita el formato YYYY-MM-DD
    //2. toISOString me lo soluciona
    //3. Split en la t, da array con dos posiciones. El [0] es la izquierda

    $inputFecha.setAttribute= ("max", hoy);
    console.log($inputFecha.setAttribute)
    $inputFecha.addEventListener("change", callback)
    console.log("se ejecuta input fecha")
}

export function setPrimerItemActivo (callback) {
    document.querySelectorAll(".list-group-item.list-group-item-action")[0].classList.add("active")
    callback()
}