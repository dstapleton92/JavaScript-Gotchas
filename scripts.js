/**
 * Example 1: Pass by reference vs pass by value? Call by Sharing
 */
function changeName(personToChange) {
    personToChange.name = 'tyler';
}

var person = {
    name: 'David',
    email: 'david@someemail.com'
};

console.log(person);
changeName(person);
console.log(person);

function incrementNumber(num) {
    num = num + 1;
    console.log(num);
}

var age = 18;

console.log(age);
incrementNumber(age);
console.log(age);

/**
 * Example 2: Function Scope, Functions returning functions
 */

var greeter = function(name) {
	var greeting = 'Hello ' + name;
	return function() {
		console.log(greeting);
	}
}

var greetDavid = greeter('David');
var greetTyler = greeter('Tyler');
var greetHillary = greeter('Hillary');

greetDavid();
greetTyler();
greetHillary();

/**
 * Example 3: The Function loop scope problem
 */
var arr = [];

// pushing the function onto the array. Haven't called the function yet.
for(var i = 0; i < 3; i++) {
	arr.push(function() {
        console.log(i);
    });
}

// NOTICE the use of a different variable (j) instead of (i) from above
// We're still iterating through the array from indices 0 to 2
// But we're not resetting i to 0 (this is why the example in class was failing)
// So now, i is preserved to be 3 (rather counter-intuitively) from when the loop above finished

// Calling the functions. Expect to see 0,1,2 printed. But will see 3 printed 3 times.
for (var j = 0; j < 3; j++) {
    var func = arr[j];
    func();
}

/**
 * Example 4: Fixing the problem using a closure
 */


var anotherArr = [];
function createLogFunction(value) {
    return function() {
        console.log(value);
    }
}

// Pushing log functions onto the array (haven't been called yet);
for (var i = 0; i < 3; i++) {
    anotherArr.push(createLogFunction(i));
}

// Calling the functions pushed onto the array
for (var j = 0; j < 3; j++) {
    var func = anotherArr[j];
    func();
}


