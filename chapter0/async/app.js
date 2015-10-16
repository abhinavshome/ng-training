//JavaScript is asynchrounous

function sayHi () {
	console.log('Hi!');
}

function sayBye () {
	console.log('Bye!');
}

function sayCheese () {
	console.log('Cheese!')
}

setTimeout(sayHi, 3000);

setTimeout(sayBye, 2000);

document.getElementById("btn").addEventListener('click', sayCheese);

console.log('How you doing?');

