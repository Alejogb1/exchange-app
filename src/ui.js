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