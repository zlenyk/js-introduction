"use strict";

var router = new Backbone.Router({
  routes: {
    ":query": "page",  // #search/kiwis
  }
});
router.on('route:page', function(page){
  console.log(page);
});

Backbone.history.start({root: "/"});

var Task = Backbone.Model.extend({
  defaults: {
    html: "",
    js: "",
    tests: function(){
      ok(1, "dummy test");
    },
    instructions: "someone has forgotten instruction to this test"
  }
});
var TaskView = Backbone.View.extend({
  className: 'task',
  template: _.template($('#taskView').html()),
  events: {
    'click .go': function(e){
      var editor = this.model.get('editor');

      var code = editor.getSession().getValue();
      console.log(code);
      eval.call(window, code);

      var tests = this.model.get('tests');
      tests();
    }
  },
  render: function(){
    console.log(this.model.get("html"));

    this.$el.html(this.template(this.model.attributes));

    console.log(this.el, $('body'));


    $('body').append(this.el);

    var editor = ace.edit(this.$('.code')[0]);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

    this.model.set('editor', editor);
  }
});

var tasks = {
  tasks: {},
  add: function(name, o){
    if (this.tasks[name]) {
      throw {reason: "You are overwriting existing task. It's surely wrong"};
    }
    this.tasks[name] = o;
  },
  load: function(name){
    if (this.tasks[name]){
      var o = this.tasks[name];
      var task = new Task(o);
      var taskView = new TaskView({
        model: task
      });

      var render = taskView.render();
      console.log(render);
      $('body').append(render);
    } else {
      throw {reason: "You are trying to get unexistent task. Die!"};
    }
  }
};

// task is our main function to add new code challenge
tasks.add("initial", {
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

$(document).ready(function(){
  tasks.load("initial");
});
