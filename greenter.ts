class Person {
    name: string
    constructor(name:string) {
        this.name = name
    }
    sayHi():string {
        return `my name is ${this.name}`
    }
}
let a:Person = new Person('Jack')
console.log(a.sayHi()); //my name is Jack
