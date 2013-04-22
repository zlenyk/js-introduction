"use strict";

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
      eval.call(window, code);

      var tests = this.model.get('tests');
      tests();
    }
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    $('#content').html(this.el);

    var editor = ace.edit(this.$('.code')[0]);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

    this.model.set('editor', editor);
  }
});
var tasks = {
  prefix: "",
  tasks: {},
  add: function(name, o){
    name = this.prefix + "/" + name;
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

      taskView.render();
    } else {
      throw {reason: "You are trying to get unexistent task. Die!"};
    }
  },
  module: function(name){
    this.prefix = name;
  }
};
