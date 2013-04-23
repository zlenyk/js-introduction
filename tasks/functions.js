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
