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

tasks.add('my-jquery', {
  instruction: 'You\'ve seen how to register events using jQuery - `$(\'#el_with_some_id\').on(\'click\', function(){});`. Now got ahead and write your own object called `my$` which will implement the exact same interface as in the example. The only supported selector should be `#` for id and `.` for class. You don\'t even have to join them. (see tests) The only supported event is `click` and `dblclick`. You should support multiple events. You should support chaining syntax `my$(___).on(___).on(___)`. If someone puts invalid arguments, say `$(\'%wutt\').on(___)` don\'t crash just do nothing. Don\'t use jQuery in this task. (yup, `my$ = $` passes the tests)',
  js: 'var my$ = function(){\n\n};',
  html: '<div id="one">one</div><em class="whoa">whoa1</em><div id="two">two</div><em class="whoa">whoa2</em><div id="three">three</div>',
  tests: function(){
    test('test my$', function(){
      // mouse click simulaton. Happened much more complicated than I thought
      function simClick(cb, name) {
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent(name, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        cb.dispatchEvent(evt);
      }

      function check(str){
        strictEqual(typeof my$(str), 'object', 'my$(' + str + ') is object');
        strictEqual(typeof my$(str).on, 'function', 'my$(' + str + ').on is function');
        strictEqual(typeof my$(str).on(), 'object', 'my$(' + str + ').on() is object');
        strictEqual(typeof my$(str).on().on, 'function', 'my$(' + str + ').on().on is function');
        strictEqual(typeof my$(str).on().on(), 'object', 'my$(' + str + ').on().on() is object');
      }

      strictEqual(typeof my$, 'function', 'my$ is a function');
      check('invalid_one');
      check('#one');
      check('.whoa');

      my$('invalid_one').on('click', function(){});
      my$('#one').on('invalid_one', function(){});

      var arr = [0, 0, 0, 0, 0];
      my$('#one').on('click', function(){
        arr[0]++;
      });
      my$('#two').on('click', function(){
        arr[1]++;
      });
      my$('#two').on('click', function(){
        arr[2]++;
      });
      my$('#three').on('click', function(){
        arr[3]++;
      }).on('dblclick', function(){
        arr[4]++;
      });

      simClick($('#one')[0], 'click');
      strictEqual(arr[0], 1, 'single click registered');

      simClick($('#two')[0], 'click');
      strictEqual(arr[1], 1, 'single click multiple events registered 0');
      strictEqual(arr[2], 1, 'single click multiple events registered 1');

      simClick($('#three')[0], 'dblclick');
      simClick($('#three')[0], 'click');

      strictEqual(arr[3], 1, 'single click registered');
      strictEqual(arr[4], 1, 'dblclick click registered');

      var count = 0;
      var clicked;
      my$('.whoa').on('click', function(){
        clicked = this;
        count++;
      }).on('click', function(){
        count++;
      });

      $('.whoa').each(function(key, el){
        simClick(el, 'click');
        strictEqual(clicked, el, 'correct event for class');
      });
      strictEqual(count, 4, 'correct total number of clicks');
    });
  }
});

tasks.add('clock', {
  html: '<div id="clock">clock here plx</div>',
  instruction: 'Your task is to create a clock. That is given `div#clock` as above write a function `clock(server)` which returns function which updates this div text content with current date in the following format: `yyyy-mm-dd`. Your script will get variable `server` which will emit time synchronization with server. You should register to its `on` method to update current server time, see example below and have a look at tests.',
  js: 'server.on(\'update\', function(date){\n  console.log(date); // 1368278556581\n});',
  tests: function(){
    test('clock', function(){
      var server = {
        methods: [],
        on: function(name, callback){
          if(name !== 'update'){
            return alert(name + ' event not supported by server');
          }
          if(typeof callback !== 'function'){
            return alert('callback to server must be a function');
          }
          this.methods.push(callback);
        },
        emit: function(date){
          this.methods.forEach(function(method){
            method(date);
          });
        }
      };

      var c = clock(server);
      c();

      strictEqual(+$('#clock').text().split('-')[2], new Date().getDate(), 'correct day of month');

      // some dates
      var dates = ['2000-01-01', '2013-10-10', '2013-12-24', '2089-01-23'];
      dates.forEach(function(date){
        server.emit(new Date(date));
        c();
        strictEqual($('#clock').text(), date, 'correct date after update');
      });
    });
  }
});
