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
