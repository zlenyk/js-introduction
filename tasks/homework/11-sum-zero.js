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
