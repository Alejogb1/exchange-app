import * as api from "./exchange.js"

export async function obtenerCambios (base = 'EUR', fecha = 'latest') {
    const llaveCache = `cambio_${base}_${fecha}`;
    const baseCache = localStorage.getItem(llaveCache);
    if (baseCache) {
       return JSON.parse(baseCache)
    }

    const cambios = await api.obtenerCambios(base, fecha)

    localStorage.setItem(llaveCache, JSON.stringify(cambios))

    return cambios
}

export async function obtenerMonedas () {   
    const llaveCache = "monedas"

    const baseCache = localStorage.getItem(llaveCache)

    if (baseCache) {
        JSON.parse(baseCache)
    }

    const monedas = await api.obtenerMonedas()

    localStorage.setItem(llaveCache, JSON.stringify(monedas))

    return monedas;
}