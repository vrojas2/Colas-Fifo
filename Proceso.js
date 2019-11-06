export default class Proceso {
    constructor( nombre, ciclos = 0 ){
        this._nombre = nombre;
        this._ciclos = ciclos;
        this._siguiente = null;
    }

    get nombre(){
        return this._nombre;
    }

    get ciclos(){
        return this._ciclos;
    }

    get siguiente(){
        return this._siguiente;
    }

    set siguiente( nuevo_siguiente ){
        this._siguiente = nuevo_siguiente;
    }

    toString(){
    }
    
}