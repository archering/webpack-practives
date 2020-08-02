import { Help } from './help';

class Math {

    constructor(){
        this.help = new Help();
    }

    calcTwo(a,b){
        return this.help.add(a, b);
    }    

    calcMinus(c,d){
        return this.help.minus(c,d);
    }

}

export { Math } ;