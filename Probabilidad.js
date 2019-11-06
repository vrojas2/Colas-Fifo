export default class Probabilidad {
    constructor(){
    }

    aleatorio(min, max){
        return Math.trunc( Math.random() * (max-min)+min)+1;
    }
}