"use strict";

var Task = Backbone.Model.extend({
  defaults: {
    html: "",
    js: "",
    tests: function(){
      ok(1, "dummy test");
    },
    instructions: "someone has forgotten instruction to this test",
    status: "none" 
  },
  getShortName: function(){
    var name = this.get('name');
    return name.substr(name.indexOf('/') + 1);
  }
});
var TaskView = Backbone.View.extend({
  className: 'task',
  template: _.template($('#taskView').html()),
  events: {
    'click .go': function(e){
	  QUnit.reset();  // should clear the DOM
	  QUnit.init();   // resets the qunit test environment
	  QUnit.start();
      
      var editor = this.model.get('editor');

      var code = editor.getSession().getValue();
      eval.call(window, code);

      var tests = this.model.get('tests');
      tests();

      if($('#qunit-tests').children().last().hasClass('pass')){
        this.model.set('status', 'pass');
      }else{
        this.model.set('status', 'fail');
      }
    },
    'click .prev': function(e){
      var prev = tasks.getPrev(this.model.get('name'));
      if(prev){
        router.navigate('task/' + prev.get('name'), {trigger: true});
      }else{
        // oh c'mon, alert?!
        alert('no prev');
      }
    },
    'click .next': function(e){
      var next = tasks.getNext(this.model.get('name'));
      if(next){
        router.navigate('task/' + next.get('name'), {trigger: true});
      }else{
        alert('no next');
      }
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
  tasks: new Backbone.Collection(),
  getGrouped: function(){
    return this.tasks.groupBy(function(task){
      return task.get('name').split('/')[0];
    });
  },
  add: function(name, o){
    name = this.prefix + "/" + name;
    o.name = name;

    var task = new Task(o);

    if(this.tasks.where({name: name}).length){
      throw {reason: "You are overwriting existing task. It's surely wrong"};
    }

    this.tasks.push(task);
  },
  load: function(name){
    var task = this.tasks.findWhere({name: name});
    if(task){
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
  },
  // returns previous and next task in the same
  // module of tasks
  getPrev: function(name){
    var task = this.tasks.findWhere({name: name});
    var i = this.tasks.indexOf(task);
    return this.tasks.at(i - 1);
  },
  getNext: function(name){
    var task = this.tasks.findWhere({name: name});
    var i = this.tasks.indexOf(task);
    return this.tasks.at(i + 1);
  }
};
