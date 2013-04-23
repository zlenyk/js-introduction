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

tasks.add("inheritance1", {
  instruction: "Write a constructor function `Animal` which has a method `sound` returning `wrrr`. Set animals `name` (property) in the constructor. It will be given in the first argument.",
  tests: function(){
    test('Animal test', function(){
      U.isFunction(Animal, 'Animal is function');
      var a = new Animal('test');
      strictEqual(a instanceof Animal, true, 'a is Animal');
      U.isFunction(a.sound, 'sound is function');
      strictEqual(a.sound(), 'wrrr', 'sound correct');
      strictEqual(a.name, 'test', 'animal named correctly');
    });
  }
});
