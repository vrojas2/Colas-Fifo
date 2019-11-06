import Proceso from "./Proceso.js";
import Queue from "./Queue.js";
import Probabilidad from "./Probabilidad.js";

let prob = new Probabilidad(39);

class Procesador {
    constructor() {
        this._cola = null;
        this._procesos_totales = 0;
        this._procesos_terminados = 0;
        this._ciclos_vacios = 0;
    }

    get cola() {
        return this._cola;
    }

    get procesosTerminados() {
        return this._procesos_terminados;
    }

    get procesosTotales() {
        return this._procesos_totales;
    }

    get ciclosVacios() {
        return this._ciclos_vacios;
    }

}

let procesador = new Procesador(300);