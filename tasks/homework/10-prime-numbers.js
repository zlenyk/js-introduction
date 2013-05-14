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
