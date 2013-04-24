tasks.module('arrays');

tasks.add('create', {
	instruction: 'Create array `array1` of size 42, filled with zeroes.',
	js: 'var array1 = ',
	tests: function(){
		test('create', function(){
			ok(typeof(array1) !== 'undefined', 'array1 exists');
			ok(Array.isArray(array1), 'array1 is array');
			ok(array1.length === 42, 'good size');
			var ok1 = true;
			for(var i=0;i<array1.length;i++)if(array1[1]!==0)ok1 = false;
			ok(ok1 === true, 'filled with zeroes');
		});
	}
});

tasks.add('sub-array', {
	instruction: 'Create function `subArray` which for given array returns longest compact subarray starting with item \'begin\' and ending with \'end\'',
	js: 'function subArray(array){\n\t//TODO\n}',
	tests: function(){
		test('sub-array', function(){
			ok(typeof(subArray) === 'function', 'subArray is defined');
			deepEqual(subArray(['begin', 1 , 3 , 5, 'end']), ['begin', 1, 3, 5, 'end'], 'simply case');
			deepEqual(subArray([1, 2, 'end', 'end', 'begin', 'begin', 'end', -1]), ['begin', 'begin', 'end'], 'multiply begin/end');
			deepEqual(subArray([1, 2, 3, 4, 5, 6, 7, 'end']), [], 'array without begin');
			deepEqual(subArray(['begin', 1, 2, 3, 4, 5, 6, 7]), [], 'array without end');
			deepEqual(subArray(['end', 1, 2, 3, 'begin']), [], 'reversed begin/end');
		});		
	}
});

tasks.add('count-in-range', {
	instruction: 'Create function named `countInRange` which for given array of numbers, and two numbers a,b counts number of items of array in range [a,b]',
	js: 'function countInRange(array, a, b){\n\t//TODO\n}',
	tests: function(){
		test('count-in-range', function(){
			ok(typeof(countInRange) === 'function', 'countInRange is defined');
			ok(countInRange([1,2,3,4,5,6,7,8,9], 2, 5)===4, 'simply case');
			ok(countInRange([1.0, 1.1, 1.2, 1.9], 1, 2) === 4, 'floats');
			ok(countInRange([2, 6, 1, 5, 3, 7, 5, 5, 8, 7], 2, 5) === 5, 'unsorted');
			ok(countInRange([3, 1, 7, 8, 6, 7, 5, 7, 8, 2, 7, 4, 6, 8, 5, 3, 4, 3, 2, 5], 9, 42) === 0, 'empty range');
		});
	}
});

tasks.add('median', {
	instruction: 'Write function `median` which for given array returns it\'s median <a href="http://en.wikipedia.org/wiki/Median">[1]</a>.',
	js: 'function median(array){\n\t//TODO\n}',
	tests: function(){
		test('median', function(){
			ok(typeof(median)==='function', 'median is defined');
			ok(median([1,2,3,4,5,6,7])===4, 'simply case');
			ok(median([1,1,1,2,2,2,2])===2, 'repeats');
			ok(median([7,2,4,1,3,6,5])===4, 'unordered');
			ok(median([17,23,-1,91,42,101])===(23+42)/2, 'even size');
		});
	}
});

tasks.add('sum-of-array', {
	instruction: 'Write a function named `sumOfArray` which for given array returns sum of it\'s numerical items.',
	js: 'function sumOfArray(array){\n\t//TODO\n}',
	tests: function(){
		test('sum-of-array', function(){
			ok(typeof(sumOfArray) === 'function', 'sumOfArray defined');
			ok(sumOfArray([1,2,3,4,5,6,7,8,9,10]) === 55, 'array of integers');
			ok(sumOfArray([1.0, 2.0, 3.0, 4.0, 5.0]) === 15.0, 'array of floats');
			ok(sumOfArray([0.022012, 0.958410, 0.689701, 0.971806, 0.875970]) === 0.022012+0.958410+0.689701+0.971806+0.875970, 'array of floats 2');
			ok(sumOfArray([])===0.0, 'empty array');
			ok(sumOfArray(['asdas', true, 42.0, 0, null, undefined, {}, [], function(){return 0.0;}]) === 42.0, 'array of anything');
		});
	}
});

tasks.add('mul-table', {
	instruction: 'Write function `mulTable` which for given integer `n` returns multiplication table for numbers 1..n (Array t, such as t[i][j] = i*j).',
	js: 'function mulTable(n){\n\t//TODO\n}',
	tests: function(){
		test('mul-table', function(){
			ok(typeof(mulTable) === 'function', 'mulTable is defined');
			var t = mulTable(7);
			ok(t.length===7, 'number of rows');
			var ok1=true;
			for(var i=0;i<7;i++)if(t[i].length!==7)ok1=false;
			ok(ok1===true, 'table is square');
			ok1=true;
			for(var i=0;i<7;i++)
				for(var j=0;j<7;j++)
					if(t[i][j]!==(i+1)*(j+1))ok1=false;
			ok(ok1===true, 'table is good filled');
		});		
	}
});

tasks.add('card-game', {
	instruction: 'Your task is to write function `simulate` which will be simulating simple card game:<br/><p>You have deck of card\'s with numbers, until there is more than 1 card, you pick up two cards from the top of the deck, then multiply value of greater one with 2 and lower one with 3, write it\'s sum on new card, and put them on the bottom of the deck. Discard picked cards.</p><br/>Return value of the card which remain at the end of the game. Your function gets array of integers (array[0] is top of the deck).',
	js: 'function simulate(t){\n\t//TODO\n}',
	tests: function(){
		test('card-game', function(){
			ok(typeof(simulate)==='function', 'simulate is defined');
			ok(simulate([1,2,3,4,5]) === 109, 'simply case');
			ok(simulate([1,1,1,1,1,1,1]) === 89, 'only ones');
			ok(simulate([1]) === 1, 'only one card');
		});
	}
});
