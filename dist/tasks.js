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
	instruction: 'Write function `mulTable` which for given integer `n` returns multiplication table for numbers 1..n (Array t, such as t[i-1][j-1] = i*j).',
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

tasks.module('homework2');

tasks.add('event-emitter', {
  instruction: 'Create simple event-emitter implementation. That is create a function `createEmitter` which returns an object having methods `emit(name)` which emits event, `on(name, callback)` which let you register event listener and `once(name, callback)` which fires the events only once. Your emitter should also support `off(name)` method which removes all listeners for `name` event. If we fire `off(name, fun)` then remove only that one registered function.',
  js: 'var createEmitter = function(){\n\n};',
  tests: function(){
    test('test emitter', function(){
      strictEqual(typeof createEmitter, 'function', 'createEmitter is a function');

      var ee = createEmitter();

      strictEqual(typeof ee.on, 'function', '.on is a function');
      strictEqual(typeof ee.once, 'function', '.once is a function');
      strictEqual(typeof ee.emit, 'function', '.emit is a function');

      var count = [0, 0, 0, 0];

      ee.on('ping', function(){
        count[3]++;
      });

      ee.on('alert', function(){
        count[0]++;
      });
      ee.on('alert', function(){
        count[1]++;
      });


      ee.once('notify', function(){
        count[2]++;
      });

      for(var i = 1; i < 5; i++){
        ee.emit('ping');
        strictEqual(count[3], i, 'correct number of events emitted');
      }

      for(var i = 1; i < 5; i++){
        ee.emit('notify');
        strictEqual(count[2], 1, 'correct number of events emitted (once)');
      }

      for(var i = 1; i < 5; i++){
        ee.emit('alert');
        strictEqual(count[0], i, 'correct number of events emitted (two events)');
        strictEqual(count[1], i, 'correct number of events emitted (two events)');
      }

      ee.off('alert');
      ee.emit('alert');

      strictEqual(count[0], 4, 'events no longer emitted');
      strictEqual(count[1], 4, 'events no longer emitted');

      // selective off
      count = [0, 0];
      var f = function(){
        count[0]++;
      };
      var g = function(){
        count[1]++;
      };

      ee.on('selective', f);
      ee.on('selective', g);

      ee.off('selective', g);

      ee.emit('selective');
      strictEqual(count[0], 1, 'f is registered');
      strictEqual(count[1], 0, 'g got unregistered');

      // off random functions
      ee.off('selective', function(){});
      ee.off('selective', function(){});
      ee.off('selective', function(){});
      ee.off('selective', function(){});

      count = [0, 0];
      ee.emit('selective');
      strictEqual(count[0], 1, 'f (still) is registered');
      strictEqual(count[1], 0, 'g (still) got unregistered');
    });
  }
});

tasks.add('async', {
  instruction: 'As we know javascript is single threaded. (remember `setTimeout`?) Sometimes you need to fire a function when all asynchronous methods finish their job, for example: you have to retrieve 3 rows from your `Pouchdb` (or `indexeddb`) database (asynchronously) and also wait for the answer from a server (ajax). When you\'re done you can render something on the screen.\n' + 
  'Your task is to write a function `done` which takes an array `fun` of asynchronous functions as its first argument and a callback function as its second argument. Every function `f` from `fun` has signature `f(callback2)` that is: when the function is finished it will fire `callback2` function. Your function `done` should fire all functions from `fun` array and then fire `callback` just after all those asynchronous functions have finished. Solution using hardcoded `setTimeout` will be rejected. Have a look at comments in tests!',
  js: 'var done = function(fun, callback){\n\n};',
  tests: function(){
    asyncTest('done test', 27, function(){
      strictEqual(typeof done, 'function', 'done is a function');

      // this function should fire immediately
      done([], function(){
        ok(1, 'function with empty fun');

        var fFired = false;
        var f = function(callback2){
          setTimeout(function(){
            fFired = true;
            strictEqual(typeof callback2, 'function', 'callback2 is a function');
            callback2();
          }, 1000);
        };
        // this test should be done in ~1 second
        done([f], function(){
          strictEqual(fFired, true, 'yeah, f has already fired');
          moreTests();
        });
      });

      // this test checks if you fire callback as soon as possible and don't
      // do a naïve solution like:
      // run all f in fun and setTimeout(callback, some_big_number)
      function moreTests(){
        var fFired = false;
        var insideFired = false;
        var f = function(callback2){
          setTimeout(function(){
            fFired = true;
            strictEqual(typeof callback2, 'function', 'callback2 is a function');
            callback2();
            setTimeout(function(){
              insideFired = true;
            }, 0);
          }, 0);
        };

        done([f], function(){
          strictEqual(fFired, true, 'yeah, f has already fired');
          strictEqual(insideFired, false, 'oh, something fired in between. You should\'ve fire callback as soon as possible');

          moreTests2();
        });
      }

      function moreTests2(){
        // this test should be done after ~1 second, not 10!
        var run = {};
        var fun = [];
        for(var i = 0; i < 10; i++){
          (function(i){
            fun.push(function(callback2){
              setTimeout(function(){
                run[i] = true;
                strictEqual(typeof callback2, 'function', 'callback2 is a function');
                callback2();
              }, 1000);
            });
          })(i);
        }

        done(fun, function(){
          for(var i = 0; i < 10; i++){
            strictEqual(run[i], true, i + ' function has been run');
          }
          start();
        });
      }
    });
  }
});

tasks.add('my-jquery', {
  instruction: 'You\'ve seen how to register events using jQuery - `$(\'#el_with_some_id\').on(\'click\', function(){});`. Now got ahead and write your own object called `my$` which will implement the exact same interface as in the example. The only supported selector should be `#` for id and `.` for class. You don\'t even have to join them. (see tests) The only supported event is `click` and `dblclick`. You should support multiple events. You should support chaining syntax `my$(___).on(___).on(___)`. If someone puts invalid arguments, say `$(\'%wutt\').on(___)` don\'t crash just do nothing. Don\'t use jQuery in this task. (yup, `my$ = $` passes the tests)',
  js: 'var my$ = function(){\n\n};',
  html: '<div id="one">one</div><em class="whoa">whoa1</em><div id="two">two</div><em class="whoa">whoa2</em><div id="three">three</div>',
  tests: function(){
    test('test my$', function(){
      // mouse click simulaton. Happened much more complicated than I thought
      function simClick(cb, name) {
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent(name, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        cb.dispatchEvent(evt);
      }

      function check(str){
        strictEqual(typeof my$(str), 'object', 'my$(' + str + ') is object');
        strictEqual(typeof my$(str).on, 'function', 'my$(' + str + ').on is function');
        strictEqual(typeof my$(str).on(), 'object', 'my$(' + str + ').on() is object');
        strictEqual(typeof my$(str).on().on, 'function', 'my$(' + str + ').on().on is function');
        strictEqual(typeof my$(str).on().on(), 'object', 'my$(' + str + ').on().on() is object');
      }

      strictEqual(typeof my$, 'function', 'my$ is a function');
      check('invalid_one');
      check('#one');
      check('.whoa');

      my$('invalid_one').on('click', function(){});
      my$('#one').on('invalid_one', function(){});

      var arr = [0, 0, 0, 0, 0];
      my$('#one').on('click', function(){
        arr[0]++;
      });
      my$('#two').on('click', function(){
        arr[1]++;
      });
      my$('#two').on('click', function(){
        arr[2]++;
      });
      my$('#three').on('click', function(){
        arr[3]++;
      }).on('dblclick', function(){
        arr[4]++;
      });

      simClick($('#one')[0], 'click');
      strictEqual(arr[0], 1, 'single click registered');

      simClick($('#two')[0], 'click');
      strictEqual(arr[1], 1, 'single click multiple events registered 0');
      strictEqual(arr[2], 1, 'single click multiple events registered 1');

      simClick($('#three')[0], 'dblclick');
      simClick($('#three')[0], 'click');

      strictEqual(arr[3], 1, 'single click registered');
      strictEqual(arr[4], 1, 'dblclick click registered');

      var count = 0;
      var clicked;
      my$('.whoa').on('click', function(){
        clicked = this;
        count++;
      }).on('click', function(){
        count++;
      });

      $('.whoa').each(function(key, el){
        simClick(el, 'click');
        strictEqual(clicked, el, 'correct event for class');
      });
      strictEqual(count, 4, 'correct total number of clicks');
    });
  }
});

tasks.add('clock', {
  html: '<div id="clock">clock here plx</div>',
  instruction: 'Your task is to create a clock. That is given `div#clock` as above write a function `clock(server)` which returns function which updates this div text content with current date in the following format: `yyyy-mm-dd`. Your script will get variable `server` which will emit time synchronization with server. You should register to its `on` method to update current server time, see example below and have a look at tests.',
  js: 'server.on(\'update\', function(date){\n  console.log(date); // 1368278556581\n});',
  tests: function(){
    test('clock', function(){
      var server = {
        methods: [],
        on: function(name, callback){
          if(name !== 'update'){
            return alert(name + ' event not supported by server');
          }
          if(typeof callback !== 'function'){
            return alert('callback to server must be a function');
          }
          this.methods.push(callback);
        },
        emit: function(date){
          this.methods.forEach(function(method){
            method(date);
          });
        }
      };

      var c = clock(server);
      c();

      strictEqual(+$('#clock').text().split('-')[2], new Date().getDate(), 'correct day of month');

      // some dates
      var dates = ['2000-01-01', '2013-10-10', '2013-12-24', '2089-01-23'];
      dates.forEach(function(date){
        server.emit(new Date(date));
        c();
        strictEqual($('#clock').text(), date, 'correct date after update');
      });
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

tasks.module("homework");

tasks.add("prime-numbers", {
  instruction: "Write a function `f` with takes argument `n` and returns object `{left: x, right: y}` where `x` is the largest prime number less than `n` and `y` is the smallest prime number greater than `n`. If `x` (or `y`) does not exists `x` then `x = -1` (or `y = -1`).",
  js: "var f = function(n){\n\n}",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');


      deepEqual(f(10), {left: 7, right: 11}, 'integer');
      deepEqual(f(1), {left: -1, right: 2}, 'small integer');
      deepEqual(f(-5), {left: -1, right: 2}, 'negative integer');
      deepEqual(f(94322), {left: 94321, right: 94327}, 'big integer');
      deepEqual(f('test'), {left: -1, right: -1}, 'string');
      deepEqual(f(20.5), {left: 19, right: 23}, 'float');
      deepEqual(f(2.1), {left: 2, right: 3}, 'float2');
    });
  }
});

tasks.module("homework");

tasks.add("sum-zero", {
  instruction: "Write a function `f` it takes array `n`. Divide it in two other arrays first one there are elements whose don't sum to zero with other elements, the other one there are pair of elements which sum to zero. The order of elements should be like in input array. Return object with properities `rest` where are not \"zero-pair\" element and `zero` where are \"zero-pair\" elements. For example [3, 1, 2, 4, -2, -1] answer is {rest:[3, 4], zero:[1, -1, 2, -2]}. Number 0 isn't in any array. If in the array has different type than numeric return -1",
  js: "var f = function(n){\n\n}",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');
      strictEqual(f([1, 'string', 2]), -1 , 'correct string check');
      deepEqual(f([1, 4, 5, 1, 2, -1, 10, -2]), {rest: [4, 5, 1, 10], zero: [1, -1, 2, -2]}, 'correct value for f([1, 4, 5, 1, 2, -1, 10, -2])');
      deepEqual(f([1, 5, -1]), {rest:[5], zero:[1, -1]}, 'correct value for f([1, 5, -1])');
      deepEqual(f([-1, 8, -8, 2, -2, 1, 3, -3, 10, 8, 1, -1, 2, 1, 6, -1, -2]), {rest:[10, 8, 6], zero:[-1, 1, 8, -8, 2, -2, 3, -3, 1, -1, 2, -2, 1, -1]}, 'correct value for f([-1, 8, -8, 2, -2, 1, 3, -3, 10, 8, 1, -1, 2, 1, 6, -1, -2])');
      deepEqual(f([4, -5, 5, -4, 7, 7, -2, 2, 5, 4, -7, 1, 4, 8]), {rest:[7, 5, 4, 1, 4, 8], zero:[4, -4, -5, 5, 7, -7, -2, 2]}, 'correct value for f([4, -5, 5, -4, 7, 7, -2, 2, 5, 4, -7, 1, 4, 8])');
      deepEqual(f([3, 9, -10, 1, 5, 4, 5, 5, 8, -6, 2, -4, 9, -9, -5, 4, 10, 6, 4, 5]), {rest:[3, 1, 5, 5, 8, 2, 9, 4, 4, 5], zero:[9, -9, -10, 10, 5, -5, 4, -4, -6, 6]}, 'correct value for f([3, 9, -10, 1, 5, 4, 5, 5, 8, -6, 2, -4, 9, -9, -5, 4, 10, 6, 4, 5])');
      deepEqual(f([6, -8, 3, -10, 4, 2, -6, -1, -6, 5, -4, 7, 3, 2, -2, 3, 2, 7, 6, 5, 4, -6, 1, 8, 7, 10, 6, 2, 8, 8, -10, -8, -7, 8, 10, 2, 4, -1, 1, 3, 2, -5, -1, 4, 2, -2, 9, -3, 10, -2, 6, -2, 5, 3, 1, 10, -8, 7, 4]
), {rest:[3, 3, 7, 5, 4, 7, 8, 2, 4, 3, 2, 4, 2, 9, 10, 6, 5, 3, 10, 7, 4], zero:[6, -6, -8, 8, 3, -3, -10, 10, 4, -4, 2, -2, -1, 1, -6, 6, 5, -5, 7, -7, 2, -2, 2, -2, -6, 6, 2, -2, 8, -8, 8, -8, -10, 10, -1, 1, -1, 1]}, 'correct value 40 elements');
      deepEqual(f([]), {rest:[], zero:[]}, 'correct value for f([])');
    });
  }
});

tasks.module("homework");

tasks.add("fibo-numbers", {
  instruction: "Write a function `f` with takes arguments `n` and `p` and returns `{fn: n-th fibonacci number (f0 = 0, f1 = 1), sum: sum of all fibonacci numbers less or equal fn modulo p}`. For incorrect arument return `{-1, -1}`.",
  js: "var f = function(n,p){\n\n}",
  tests: function () {
    test('test f', function () {
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      var f0 = 0;
      var f1 = 1;
      var f2 = 1;
      var s = 0;
      for (var j = 2; j < 8; j++) {
        f0 = 0;
        f1 = 1;
        f2 = 1;
        s = 0;
        for (var i = 0; i < 15; i++) {
          f2 = f1+f0;
          deepEqual(f(i,j), {fn: f0, sum: s}, 'correct value of f(' + i + ',' + j + ')');
          f0 = f1;
          f1 = f2;
          s = s + f0;
          s = s % j;
        }
      }
      deepEqual(f(0,2), {fn: 0, sum: 0}, 'correct value for f(0,2)');
      deepEqual(f(-1,2), {fn: -1, sum: -1}, 'correct value for f(-1,2)');
      deepEqual(f(1,-2), {fn: -1, sum: -1}, 'correct value for f(1,-2)');
    });
  }
});

tasks.module("homework");

tasks.add("regexp-names", {
  instruction: "Write a function `f` which takes string `text` as argument and returns an array of pairs of " +
    "first name and second name. This array has to be sorted by (first name, second name) in lexicographical order and every word it contains has to be reversed after that operation. In addition to that, there is guarantee, that every name starts with uppercase, consists only of english letters  and it is surrounded by spaces on both ends. " +
    " There is always even number of names in text and the second name is proceded by the first name.",
  js: "var f = function(text){\n\n}",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      var finder = function(text) {
        var regexp = /\s[A-Z][a-z]+\s/g;
        var array;
        var names = [];
        // whole loop is equivalent to names = text.match(regexp))
        while((array = regexp.exec(text)) !== null) {
          names.push(array[0].substring(1, array[0].length-1));
        }
        var pairs = [];
        for(var i = 0; i < names.length; i += 2) {
          pairs.push([names[i], names[i+1]]);
        }
        pairs.sort();
        for(var i = 0; i < pairs.length; i++) {
          pairs[i][0] = pairs[i][0].split("").reverse().join("");
          pairs[i][1] = pairs[i][1].split("").reverse().join("");
        }
        return pairs;
      };

      var text1 = " Ala  Nowa  Ania  Ttr  Ola  Usd  Ula  Ksdf  Ewa  Jksd "
      var text2 = "324230 90234 j][< Emilia ] /.,';][  Orian "
      var text3 = " Ania  ola  Kowalska  KAsia "
      var text4 = " --- Zofia - Rambo -****- Zofia -*%$#$%ala ula -- Norris  ++ Eulalia  // Skrzyp  iza Gordon  Freeman "
      var text5 = "genia jadzia krycha celina barbara hilda jagoda eurydyka!"

      deepEqual(f(text1), finder(text1), 'correct value for ' + text1);
      deepEqual(f(text2), finder(text2), 'correct value for ' + text2);
      deepEqual(f(text3), finder(text3), 'correct value for ' + text3);
      deepEqual(f(text4), finder(text4), 'correct value for ' + text4);
      deepEqual(f(text5), finder(text5), 'correct value for ' + text5);
    });
  }
});

tasks.module("homework");

tasks.add("factorial", {
  instruction: "Write a function `f` with takes argument `n` and `1!`. For incorrect arument return `-1`.",
  js: "var f = function(n){\n\n}",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      var res = 1;
      for(var i = 1; i < 10; i++){
        res *= i;
        strictEqual(f(i), res, 'correct value of f(' + i + ')');
      }

      strictEqual(f(0), 1, 'correct value for f(0)');
      strictEqual(f(-1), -1, 'correct value for f(-1)');
      strictEqual(f('wut'), -1, 'correct value for f(\'wut\')');
      strictEqual(f(function(){}), -1, 'correct value for f(function(){})');
      strictEqual(f({}), -1, 'correct value for f({})');
    });
  }
});

tasks.module("homework");

tasks.add("html-shuffling", {
  instruction: "Sort `&lt;li&gt;`'s children of `&lt;ul id='list'&gt;`",
  html: '<ul id="list"><li data-content="5">5</li><li id="3">3</li><li class="2">2</li><li name="1">1</li><li data-value="4">4</li></ul>',
  tests: function(){
    test('test', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      var li = $('#list li');
      strictEqual($(li[0]).attr('name'), '1', 'st ok');
      strictEqual($(li[1]).attr('class'), '2', 'nd ok');
      strictEqual($(li[2]).attr('id'), '3', 'rd ok');
      strictEqual($(li[3]).attr('data-value'), '4', '4th ok');
      strictEqual($(li[4]).attr('data-content'), '5', '5th ok');
    });
  }
});

tasks.module("homework");

tasks.add("sum-of-odd-numbers", {
  instruction: "Write a function `f` which takes arbitrary number of arrays of (possibly arrays of: possibly arrays of: and so on) integers and returns sum of odd integers from these arrays.",
  js: "var f = function(array){\n\n}",
  tests: function () {
    test('test f', function () {
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      var res = [];
      var ans = 0;
      for (var i = 0; i < 100; i++) {
        res[i] = i;
        if (i % 2 === 1)
          ans += i;
        strictEqual(f(res), ans, 'correct value of f(' + i + ')');
      }

      strictEqual(f([0]), 0, 'correct value for f([0])');
      strictEqual(f([-1]), -1, 'correct value for f([-1])');
      strictEqual(f([-1],1), 0, 'correct value for f([-1],1)');
      strictEqual(f([-1,-2,0,0,3,2,2,3]),5, 'correct value for f([-1,-2,0,0,3,2,2,3])');
      strictEqual(f(-1,-2,0,0,3,2,2,3),5, 'correct value for f(-1,-2,0,0,3,2,2,3)');
      strictEqual(f([[1, 4, 2], [-1, 6, 8, 3, [-3, 4, 0, -4, 5]], -5, -8]),0, 'correct value for f([[1, 4, 2], [-1, 6, 8, 3, [-3, 4, 0, -4, 5]], -5, -8])');
      strictEqual(f([1, 4, 2], [-1, 6, 8, 3, [-3, 4, 0, -4, 5]], -5, -8),0, 'correct value for f([1, 4, 2], [-1, 6, 8, 3, [-3, 4, 0, -4, 5]], -5, -8)');

    });
  }
});
