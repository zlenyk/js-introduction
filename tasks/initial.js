tasks.add("initial/hello", {
  instruction: 'Write a function named hi which returns string "hello"',
  js: "var a = [1,2,3,4]",
  html: "<em>test</em>",
  tests: function(){
    test("hello test", function(){
      ok(typeof(hi) === "function", "hi is a function");
      equal(hi(), "hello", "correct value returned");
    });
  }
});
