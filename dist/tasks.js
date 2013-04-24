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

tasks.module("functions");

tasks.add("function-returning-array", {
  instruction: "Write a function `f` with takes argument `n` and returns array `1..n`",
  tests: function(){
    test('test f', function(){
      var n = 1;
      for(var i = 1; i < 6; i++, n *= i){
        deepEqual(f(n), _.range(1,n+1), "test with n=" + n);
      }
    });
  }
});

var animalTest = function(){
  U.isFunction(Animal, 'Animal is function');
  var a = new Animal('test');
  strictEqual(a instanceof Animal, true, 'a is Animal');
  U.isFunction(a.sound, 'sound is function');
  strictEqual(a.sound(), 'wrrr', 'sound correct');
  strictEqual(a.name, 'test', 'animal named correctly');
}
tasks.add("inheritance1", {
  instruction: "Write a constructor function `Animal` which has a method `sound` returning `wrrr`. Set animals `name` (property) in the constructor. It will be given in the first argument.",
  tests: function(){
    test('Animal test', function(){
      animalTest();
    });
  }
});

tasks.add("inheritance2", {
  instruction: "Copy your `Animal` from previous task. Now write constructor function `Cat` which inherits from `Animal`. Make cat sound like `meow`. Add a method `go` to `Animal` returning the number how many times it has been called.",
  tests: function(){
    test('Cat test', function(){
      animalTest();

      U.isFunction(Cat, 'Cat is a function');
      var c = new Cat('barry');
      strictEqual(c instanceof Cat, true, 'c is Cat');
      strictEqual(c instanceof Animal, true, 'c is Animal');
      U.isFunction(c.sound, 'sound is a function');
      strictEqual(c.sound(), 'meow', 'sound correct');

      var a = new Animal();
      strictEqual(a.go(), 1, 'animal go');
      strictEqual(a.go(), 2, 'animal go again');
      strictEqual(c.go(), 1, 'cat go');
      strictEqual(a.go(), 3, 'animal go once more');
      strictEqual(c.go(), 2, 'cat go again');
      strictEqual(c.go(), 3, 'cat go once more');
    });
  }
});

tasks.add("this-design-error", {
  instruction: "If a `function` is called its `this` can be bound later to another object that the function is created in. However, if you have a function within a function its `this` is bound to global `window` object. It's a language design error. Usually you can observe this design error when whilst attaching a callback you happen to use `this` keyword. Create an object `o` which has some `name`. Then create method `go` which returns anonymous function which returns object's name. Don't hard-code it, it should work even when you change `o.name`",
  tests: function(){
    test('this test', function(){
      U.isObject(o, 'o is an object');
      U.isFunction(o.go, 'o.go is a function');

      var getName = o.go();

      o.name = "name1";
      strictEqual(getName(), "name1", 'correct name');

      o.name = "name2";
      strictEqual(getName(), "name2", 'correct name');
    });
  }
});

tasks.add("closure", {
  instruction: "Functions created inside functions have still access to its variables after the main function has finished. It's closure. To see that create a function named `makeAdder` which takes one argument `n` and returns a function taking one argument `m` which returns simply `n+m`. Don't worry about remebering `n`",
  tests: function(){
    test('closure', function(){
      U.isFunction(makeAdder);

      for(var i = 0; i < 3; i++){
        var j = i * 3;
        var f = makeAdder(j);
        U.isFunction(f);
        strictEqual(f(4), j + 4, 'correct value');
      }
    });
  }
});

tasks.add("variable-function", {
	instruction: 'Write function `sum` which takes variable number of numbers and returns its\' sum.',
	js: '',
	tests: function(){
		test('variable-function', function(){
			ok(typeof(sum) === 'function', 'sum is defined');
			ok(sum() === 0, '0 numbers');
			ok(sum(7) === 7, '1 numbers');
			ok(sum(1,2) === 3, '2 numbers');
			ok(sum(1,2,3,4,5) === 15, '5 numbers');
			ok(sum(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1) === 15, '15 numbers');
		});
	}
});

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


tasks.module('jquery');

tasks.add("find-body", {
  instruction: 'Save jQuery object for body into body variable',
  js: "var body = ?;",
  html: "",
  tests: function(){
    test("is it there?", function(){
      ok(body !== undefined, "body variable defined");
      strictEqual(body.length, 1, "body contains one element...");
      strictEqual(body[0], document.body, "...which is body");
    });
  }
});


tasks.add("forms-and-math", {
	instruction: 'Write function `sum` which compute sum of floats in forms `first` and `second` and put the result in `result`.',
	html: '<div style="padding:32px;border:1px dashed black;width:600px;margin:0px auto;text-align:center"><input id="first" value="3.1415926"/> + <input id="second" value="2.71828182"/> = <input id="result" readonly="readonly"/></div>',
	js: 'function sum(){\n\t//TODO\n}',
	tests: function(){
		test("forms-and-math", function(){
			ok(typeof(sum) === 'function', "sum is defined");
			ok(function(){
				$('#first').val('123');
				$('#second').val('10000');
				sum();
				var x = parseFloat($('#result').val());
				console.log(x);
				return (x===10123);
			}(), "adding integers");
			ok(function(){
				$('#first').val('3.1415926');
				$('#second').val('2.71828182');
				sum();
				var x = parseFloat($('#result').val());
				console.log(x);
				return (x===2.71828182+3.1415926);
			}(), "adding floats");
		});
	}
});

tasks.add('chess-board', {
	instruction: 'Write function `toggleColors` which for given checkboard (named `board`) reverse colors of it\'s cells.',
	html: '<style type="text/css">#board{margin:20px auto;width:160px;height:160px;border:6px solid red;}#board div{float:left;height:32px;width:32px}</style><div id="board">'+function(n){
		var res = [];
		for(var i=0;i<n;i++){
			for(var j=0;j<n;j++)
				if((i+j)&1)res.push('<div style="background:#fff"></div>');
				else res.push('<div style="background:#000"></div>')
		}
		return res.join('');
	}(5)+'</div></div>',
	js: 'function toggleColors(){\n\t//TODO\n}',
	
	tests: function(){
		test('chess-board', function(){
			ok(typeof(toggleColors) === 'function', 'toggleColor is defined');
			var f = function(){
				var T = []
				$('#board div').each(function(){
					if($(this).css('background-color')==='rgb(0, 0, 0)')T.push('B');else
					if($(this).css('background-color')==='rgb(255, 255, 255)')T.push('W');else T.push('.');
				});
				return T.join('');
			}
			
			var res = [];
			for(var i=0;i<5;i++){
				for(var j=0;j<5;j++)
					if((i+j)&1)res.push('<div style="background:#fff"></div>');
					else res.push('<div style="background:#000"></div>')
			}
			$('#board').html(res.join(''));
			
			var n = f();
			toggleColors();
			var m = f();
			
			console.debug(n,m);
			var ok1 = true;
			if(n.length!=m.length)
				ok1 = false;
			else{
				for(var i=0;i<n.length;i++)
					if(!((n.charAt(i)=='B'&&m.charAt(i)=='W')||(n.charAt(i)=='W'&&m.charAt(i)=='B'))){ok1=false;break;}
			}
			ok(ok1===true, 'colors toggled correctly');
		});
	}
});

tasks.add('hidden-text', {
	instruction: 'You have given input (named `secret`) with hidden text, write function `unhide` which returns it\'s real content.',
	html: '<input id="secret" type="password"/>',
	js: 'function unhide(){\n\t//TODO\n}',
	tests: function(){
		test('hidden-text', function(){
			ok(typeof(unhide) === 'function', 'unhide is defined');
			$('#secret').val('mój sekret');
			ok(unhide()==='mój sekret', 'simply case');			
		});
	}
});

tasks.add('events', {
	instruction: 'You have given button (id = `clickMe`). Your task is to write function `setClick` which take parameter `f` (function) and set it as onClick event to this button.',
	html: '<script>function clicked(){alert("NIE");}</script><input type="button" id="clickMe" value="Click Me"/>',
	js: '',
	tests: function(){
		test('events', function(){
			$('#clickMe').off('click');
			
			ok(typeof(setClick) === 'function', 'setClick is defined');
			_ilosc = 0;
			setClick(function(){_ilosc+=1;});
			$('#clickMe').click();
			ok(_ilosc === 1, 'single event');
			
			_ilosc = 0;
			setClick(function(){_ilosc+=1;});
			setClick(function(){_ilosc+=1;});
			$('#clickMe').click();
			ok(_ilosc === 1, 'multiple event');
		});
	}
});

tasks.add('json', {
	instruction: 'You will received string in JSON format describing content of user\'s cart. Write function `sumUp` returning cost of all items in it.',
	js: 'function sumUp(json){\n\t//TODO\n}',
	tests: function(){
		test('json', function(){
			ok(typeof(sumUp) === 'function', 'sumUp is defined');
			ok(sumUp('{"firstName":"John","lastName":"Smith","items":[{"name":"a","price":10,"amount":2},{"name":"b","price":7.5,"amount":3}]}') === 42.5, 'simply case');
		});
	}
});

tasks.add('ajax', {
	instruction: 'Your task is to send query to remote server `http://open.mapquestapi.com/nominatim/v1/search.php?format=json&q=kraków+[castle]`, parse received JSON data and pass pair (array) of numeric coordinates of Wawel to callback provided as a parameter.',
	js: 'function query(callback){\n\t//TODO\n}',
	tests: function(){
		asyncTest('ajax', 2,  function(){
			ok(typeof(query) === 'function', 'query is defined');
			var f = function(x){
				//console.debug(x);
				deepEqual(x, [parseFloat("50.05441295"), parseFloat("19.9360155090054")], 'good answer');
				start();
			};
			setTimeout(function(){console.debug('TAK');ok(false, 'timeout');start();}, 5000);
			
			query(f);
			
		});
	}
});


tasks.module('objects');

tasks.add('create', {
  instruction: 'Create an object named `obj` with property `hello` and value `"world"`',
  js: 'var obj = ?',
  tests: function(){
    test('check object', function(){
      U.isObject(obj);
      strictEqual(obj.hello, "world", "hello world");
    });
  }
});

tasks.add('strange-name', {
  instruction: 'Create an object `obj` with property `for` and `it\'s possible` valued 1',
  js: 'var obj = ?',
  tests: function(){
    test('check object', function(){
      U.isObject(obj);
      strictEqual(obj["for"], 1, "for is 1");
      strictEqual(obj["it's possible"], 1, "it's possibl is 1");
    });
  }
}); 

tasks.add('subobjects', {
  instruction: 'Objects can be nested. Try creating object `obj` with property `test` and value {hello: "world"}',
  js: 'var obj = ?',
  tests: function(){
    test('check object', function(){
      U.isObject(obj);
      ok(obj.test, "obj.test is set");
      deepEqual(obj.test, {hello: "world"}, "obj.test is set correctly");
    });
  }
}); 

tasks.add('methods', {
  instruction: 'Objects can hold any objects. In particular they can hold functions. Create object `man` with property `height` set to `150` and method `grow` which changes his height to `180`',
  js: 'var man = ?',
  tests: function(){
    test('check man', function(){
      U.isObject(man);
      strictEqual(man.height, 150, "man is 150 tall");
      U.isFunction(man.grow, "grow is a function");
      man.grow();
      strictEqual(man.height, 180, "man has grown and he's 180 now");
    });
  }
}); 

tasks.add('changing-this', {
  instruction: '`this` is bound to method really late. Write a method `f(object, object2)` which takes `object2.method` and applies it to `object` (so that method\'s this is bound to object)',
  tests: function(){
    test('check-method', function(){
      U.isFunction(f);
      var o = {
        value: 0,
        method: function(){
          return this.value;
        }
      };
      var p = {
        value: 1
      };
      ok(f(p, o)() === 1, "method applied correctly");
    });
  }
});

tasks.add('keys', {
  instruction: 'Create a function named `keys` which returns key set for the given argument object',
  tests: function(){
    test('check-keys', function(){
      var o = {k1: 0, k2: 0, k3: 0};
      deepEqual(keys(o), Object.keys(o), "keys returned correctly");
    });
  }
});

tasks.add('using-create', {
  instruction: 'Given object `a` use `Object.create` to create `b`. Add property `c` valued 1 to that object',
  js: 'var a = {name: "I\'m a!"}',
  tests: function(){
    test('check-create', function(){
      deepEqual(a, {name: "I'm a!"}, "a not destroyed");
      strictEqual(b.c, 1, "b has correct property c");

      strictEqual(b.name, "I'm a!", "b has correct property a");
      delete b.name;
      strictEqual(b.name, "I'm a!", "b has correct property a");
    });
  }
});

tasks.add('returning-object', {
  instruction: 'Create a function named `f` which for given argument `name` returns object which has property name equal to that argument',
  tests: function(){
    test('check-function', function(){
      var a = f('yeah');
      deepEqual(a, {name: 'yeah'}, 'correct object returned');
    });
  }
});
