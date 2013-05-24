tasks.module("homework");

tasks.add("Roman-numerals", {
  instruction: "Write a function `f` which takes an integer smaller than 4000 as an argument and returns a string- it's Roman representation.",
  js: "var f = function(n){\n\n}",
  tests: function () {
    test('test f', function () {
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      deepEqual(f(1),'I', 'basic sign no.1');
      deepEqual(f(5), 'V', 'basic sign no.2');
      deepEqual(f(50), 'L', 'basic sign no.3');
      deepEqual(f(100), 'C', 'basic sign no.4');
      deepEqual(f(1000), 'M', 'basic sign no.5');
      deepEqual(f(4), 'IV', 'small integer');
      deepEqual(f(6), 'VI', 'small integer no.2');
      deepEqual(f(13), 'XIII', 'integer below 20');
      deepEqual(f(17), 'XVII', 'integer below 20');
      deepEqual(f(63), 'LXIII', 'medium integer');
      deepEqual(f(79), 'LXXIX', 'medium integer no.2');
      deepEqual(f(99), 'XCIX', 'medium integer no.3');
      deepEqual(f(236), 'CCXXXVI', 'medium integer - above 100');
      deepEqual(f(444), 'CDXLIV', 'medium integer - above 100');
      deepEqual(f(800), 'DCCC', 'medium integer - above 500');
      deepEqual(f(736), 'DCCXXXVI', 'medium integer - above 500');
      deepEqual(f(3456), 'MMMCDLVI', 'big integer');
      deepEqual(f(2222), 'MMCCXXII', 'big integer no.1');
      deepEqual(f(1313), 'MCCCXIII', 'big integer no.2');
      deepEqual(f(2546), 'MMDXLVI', 'big integer no.3');
    });
  }
});
