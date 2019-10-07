var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHi = function () {
        return "my name is " + this.name;
    };
    return Person;
}());
var a = new Person('Jack');
console.log(a.sayHi());
