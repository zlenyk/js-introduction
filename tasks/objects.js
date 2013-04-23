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

tasks.add('functions', {
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

