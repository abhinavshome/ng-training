//JavaScript is asynchrounous

function sayHi () {
	console.log('Hi!');
}

function sayBye () {
	console.log('Bye!');
}

setTimeout(sayHi, 3000);

setTimeout(sayBye, 2000);

console.log('Hello World!');

