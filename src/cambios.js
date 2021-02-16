export function obtenerFechaSeleccionada () {
    const fechaSeleccionada = document.querySelector("#fecha-input").value;
    return fechaSeleccionada || undefined;
}
export function obtenerBaseSeleccionada () {
    const $itemActivo = document.querySelector(".list-group-item.active")
    if($itemActivo) {
        return document.querySelector(".list-group-item.active").dataset.base
    }
    return undefined    
}


