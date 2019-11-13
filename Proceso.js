export default class Proceso {
    constructor(numero, ciclos = 0) {
        this._numero = numero;
        this._ciclos = ciclos;
        this._siguiente = null;
    }

    get numero() {
        return this._numero;
    }

    get ciclos() {
        return this._ciclos;
    }

    set ciclos(nueva_Val) {
        this._ciclos = nueva_Val;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(nuevo_siguiente) {
        this._siguiente = nuevo_siguiente;
    }

}