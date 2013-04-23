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

tasks.module('initial');

tasks.add("hello", {
  instruction: 'Write a function named hi which returns string "hello"',
  js: "var a = [1,2,3,4]",
  html: "<em>test</em>",
  tests: function(){
    test("hello test", function(){
      ok(typeof(hi) === "function", "hi is a function");
      equal(hi(), "hello", "correct value returned");
    });
  }
});

tasks.add("hello2", {
  instruction: "say hello"
});

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
      ok(f(o, p)() === 1, "method applied correctly");
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
      deepEqual(f, {name: 'yeah'}, 'correct object returned');
    });
  }
});
