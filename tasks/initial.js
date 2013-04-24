tasks.module('initial');


tasks.add('docs', {
	instruction: 'Read following docs:<ul><li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide">JavaScript Guide</a></li><li><a href="http://try.jquery.com/">Try JQuery</a></li><li><a href="http://en.wikipedia.org/wiki/JSON">JSON format</a></li><li><a href="http://api.jquery.com/">JQuery API Documentation</a></li></ul>',
	tests: function(){}	
});

tasks.add('regexp', {
	instruction: 'Write function `phoneNumber` which gets string and return `true` if it is of a form \'###-###-###\' and `false` otherwise.',
	js: 'function phoneNumber(phone){\n\t//TODO\n}',
	tests: function(){
		test('regexp', function(){
			ok(typeof(phoneNumber) === 'function', 'phoneNumber is defined');
			ok(phoneNumber('123-123-123') === true, 'simply case');
			ok(phoneNumber('asd-asd-asd') === false, 'with letters');
			ok(phoneNumber('asdas23123daczx') === false, 'random test');
			ok(phoneNumber('1234-1232-123') === false, 'too much digits');
			ok(phoneNumber('123-123-123\n123-123-123') === false, 'multiline test');
			ok(phoneNumber('     123-123-123    ') === false, 'trailing/leading spaces');
		});
	}
});
/*tasks.add("sum-free-set", {
	instruction: "Write a function named `f` which for given array of 'integers' check whether it is sum free.",
	js: "function f(array){\n\t//TODO\n}",
	tests: function(){
		test("empty array", function(){
			ok(typeof(f)==='function', 'f exists');
			ok(f([]) === true, 'empty array is sum-free');
			ok(f([1,2,3]) === false, 'simply case');
			ok(f([1,2*2*2,3*3*3,4*4*4,5*5*5]) === true, 'fermat\'s test');
			ok(f([1,3,5,7,9,11,13,15,17,19,21,23,25,27]) === true, 'odd test');
			ok(f([6, 72, 89, 2, 69, 95, 10, 18, 41, 18, 13, 3, 54, 44, 91, 48, 70, 61, 90, 4, 55, 5, 66, 90, 77, 4, 1, 26, 90, 35, 84, 9, 24, 41, 63, 32, 9, 35, 79, 68, 64, 6, 14, 33, 32, 17, 48, 78, 97])===false, 'big test 1');
			ok(f([86682, 19754, 95261, 73170, 21786, 37243, 46020, 86288, 82955, 23115, 3063, 73332, 40202, 21958, 82480, 34233, 57915, 76860, 47916]) === true, 'big test 2');
			ok(f([-3,-2,-1,0,1,2,3]) === false, 'integer test');
		});
	}	
});*/

