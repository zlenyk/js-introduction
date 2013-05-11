tasks.module('homework2');

tasks.add('async', {
  instruction: 'As we know javascript is single threaded. (remember `setTimeout`?) Sometimes you need to fire a function when all asynchronous methods finish their job, for example: you have to retrieve 3 rows from your `Pouchdb` (or `indexeddb`) database (asynchronously) and also wait for the answer from a server (ajax). When you\'re done you can render something on the screen.\n' + 
  'Your task is to write a function `done` which takes an array `fun` of asynchronous functions as its first argument and a callback function as its second argument. Every function `f` from `fun` has signature `f(callback2)` that is: when the function is finished it will fire `callback2` function. Your function `done` should fire all functions from `fun` array and then fire `callback` just after all those asynchronous functions have finished. Solution using hardcoded `setTimeout` will be rejected. Have a look at comments in tests!',
  js: 'var done = function(fun, callback){\n\n};',
  tests: function(){
    asyncTest('done test', 27, function(){
      strictEqual(typeof done, 'function', 'done is a function');

      // this function should fire immediately
      done([], function(){
        ok(1, 'function with empty fun');

        var fFired = false;
        var f = function(callback2){
          setTimeout(function(){
            fFired = true;
            strictEqual(typeof callback2, 'function', 'callback2 is a function');
            callback2();
          }, 1000);
        };
        // this test should be done in ~1 second
        done([f], function(){
          strictEqual(fFired, true, 'yeah, f has already fired');
          moreTests();
        });
      });

      // this test checks if you fire callback as soon as possible and don't
      // do a naïve solution like:
      // run all f in fun and setTimeout(callback, some_big_number)
      function moreTests(){
        var fFired = false;
        var insideFired = false;
        var f = function(callback2){
          setTimeout(function(){
            fFired = true;
            strictEqual(typeof callback2, 'function', 'callback2 is a function');
            callback2();
            setTimeout(function(){
              insideFired = true;
            }, 0);
          }, 0);
        };

        done([f], function(){
          strictEqual(fFired, true, 'yeah, f has already fired');
          strictEqual(insideFired, false, 'oh, something fired in between. You should\'ve fire callback as soon as possible');

          moreTests2();
        });
      }

      function moreTests2(){
        // this test should be done after ~1 second, not 10!
        var run = {};
        var fun = [];
        for(var i = 0; i < 10; i++){
          (function(i){
            fun.push(function(callback2){
              setTimeout(function(){
                run[i] = true;
                strictEqual(typeof callback2, 'function', 'callback2 is a function');
                callback2();
              }, 1000);
            });
          })(i);
        }

        done(fun, function(){
          for(var i = 0; i < 10; i++){
            strictEqual(run[i], true, i + ' function has been run');
          }
          start();
        });
      }
    });
  }
});

