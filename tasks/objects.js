tasks.module('objects');

var U = {
  isObject: function(obj, err){
    strictEqual(typeof(obj), "object", err || "it's an object");
  },
  isFunction: function(f, err){
    strictEqual(typeof(f), "function", err || "it's a function");
  }
};

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
