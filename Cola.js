export default class Cola {
    constructor(probabilidad) {
        this._probabilidad = probabilidad;
        this._inicio = null;
        this._final = null;
        this._ciclosColasVacias = 0;
        this._procesoCompletado = 0;
        this._ciclosIzquierda = 0;
        this._processosIzquierdos = 0;
        this._ciclosTotales = 0;
        this._elementosString = "";
    }

    get atributesString() {
        return this._elementosString;
    }

    iniciarCola() {
        for (let i = 1; i <= 300; i++) {
            let nuevoProceso = this._probabilidad.revisarNuevoProceso();
            if (nuevoProceso != null) {
                this._ciclosTotales++;
                this.posicionarEnCola(nuevoProceso);
            }
            if (this._inicio != null) {
                this._inicio.ciclos = this._inicio.ciclos - 1;
                console.log(`No. de ciclo: ${i} No. de proceso ${this._inicio.numero}. Ciclos restantes ${this._inicio.ciclos}`);
                if (this._inicio.cycles == 0) {
                    this._procesoCompletado++;
                    this.eliminarTerminandoProceso();
                }
            } else {
                console.log(`No. de ciclo: ${i} Ciclo sin procesos`);
                this._ciclosColasVacias++;
            }
        }
        this.elementosComoString();
    }

    elementosComoString() {
        this.ciclosProcesoIzquierda();
        this._elementosString =
            `Ciclos con lista vacía ${this._ciclosColasVacias}` + "\n" +
            `Procesos totales ${this._ciclosTotales}` + "\n" +
            `Procesos pendientes ${this._processosIzquierdos}` + "\n" +
            `Ciclos pendientes ${this._ciclosIzquierda}` + "\n" +
            `Procesos atendidos ${this._procesoCompletado}`;
    }

    ciclosProcesoIzquierda() {
        let inicio = this._inicio;
        while (inicio != null) {
            this._processosIzquierdos++;
            this._ciclosIzquierda += inicio.ciclos;
            inicio = inicio.siguiente;
        }
    }

    posicionarEnCola(nuevoProceso) {
        if (this._inicio == null) {
            this._inicio = nuevoProceso;
        } else if (this._final == null) {
            this._final = nuevoProceso;
            this._inicio.siguiente = this._final;
        } else {
            this._final.next = nuevoProceso;
            this._final = nuevoProceso;
        }
    }

    eliminarTerminandoProceso() {
        if (this._inicio.siguiente == this._final) {
            this._inicio = this._final;
            this._final = null;
        } else if (this._final == null) {
            this._inicio = null;
        } else {
            this._inicio = this._inicio.siguiente;
        }
    }
}