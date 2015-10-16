//Simple function call
function add (num1, num2) {
	return num1 + num2;
}

var sum = add(2,3);

console.log('Sum is ', sum);


//store function in a variable
var func = function add (num1, num2) {
	return num1 + num2;
};

sum = func(2,3);

console.log('Sum is ', sum);


//assigning just name
var func = add;

sum = func(2,3);

console.log('Sum is ', sum);


//anonymous function
var anonymousFunc = function (num1, num2) {
	return num1 + num2;
}

var sum = anonymousFunc(2,3);

console.log('Sum is ', sum);


//pass into another function as parameter
function average (num1, num2, addFunc) {
	var sum = addFunc(num1, num2);
	return avg = sum/2;
}

var avg = average(2,3,add);
console.log('Average is ', avg);


//pass anonymous function directly
avg = average(2,3,function (num1, num2) {
	return num1 + num2;
});
console.log('Average is ', avg);
