import Probabilidad from "./Probabilidad.js";
import Cola from "./Cola.js";

class Main {
    constructor() {
        this._probabilidad = new Probabilidad();
        this._nuevaCola = new Cola(this._probabilidad);
    }

    ejecutarCola() {
        this._nuevaCola.iniciarCola();
        this.imprimirElementos();
    }

    imprimirElementos() {
        console.log(this._nuevaCola.elementosString);
    }

}

let m = new Main();
m.ejecutarCola();