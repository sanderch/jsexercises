var Class = function () {
    var klass = function () {
        this.init.apply(this, arguments);
    }
    klass.prototype.init = function () { }
    return klass;
}

var Person = new Class;

// Person.prototype.Age = 10;

Person.prototype.init = function (name) {
    this.BirthDate = Date();
    alert("person initialized");
    console.log("person " + name + " initialized. Age is " + this.BirthDate);
}

var World = new Class;
World.prototype.persons = [];
World.prototype.addPerson = 
function (person) {
    debugger;
    this.persons.push(person);
}
