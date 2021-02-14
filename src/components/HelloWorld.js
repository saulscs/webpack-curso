export class HelloWorld {
    constructor(name){
        this.name = name;
    }

    greet(){
        return `Hola mundo webpack con ${this.name}`
    }
}