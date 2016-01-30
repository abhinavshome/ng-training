//example object
var person = {
	name: 'Jack Dawson',
	age: 30,
	address: {
		city: 'London',
		street: 'Street 1'
	}
};

//accessing properties
console.log(person.name); //Jack
console.log(person['name']); //Jack
console.log(person.address); //{ city: 'London', street: 'Street 1' }
console.log(person.address.city); //London
console.log(person['address']['street']); //Street 1

//add properties dynamically
person['nickname'] = 'Jackie';
console.log(person.nickname); //Jackie

person.address.locality = 'North';
console.log(person.address); //{ city: 'London', street: 'Street 1', locality: 'North' }

//example class
function Person (name) {
	this.name = name;
}

var person = new Person('Jack Dawson');
console.log(person); //Person { name: 'Jack Dawson' }

//public and private
function Person (name) {
	var age = 30;

	this.name = name;

	this.setAge = function (a) {
		age = a;
	};

	this.getAge = function () {
		return age;
	}
}

var person = new Person('Jack');
console.log(person.name); //Jack
console.log(person.age); //undefined
console.log(person.getAge());//30
person.setAge(40);
console.log(person.getAge());//40




