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
