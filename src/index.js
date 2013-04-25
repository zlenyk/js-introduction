"use strict";

// we needed to create custom event emmiter
// for testDone as QUnit does not let us
// unregister
QUnit.tests = $({});
QUnit.testDone(function(results){
  QUnit.tests.trigger('done', results);
});

// utility used in tasks
var U = {
  isObject: function(obj, err){
    strictEqual(typeof(obj), "object", err || "it's an object");
  },
  isFunction: function(f, err){
    strictEqual(typeof(f), "function", err || "it's a function");
  }
};

var Task = Backbone.Model.extend({
  defaults: {
    html: "",
    js: "",
    tests: function(){
      alert("someone has forgotten tests!");
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

      var that = this;
      QUnit.tests.one('done', function(e, res){
        that.model.set('status', !res.failed ? 'pass' : 'fail');
      });
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

    var $ins = this.$('.instruction');
    $ins.html($ins.html().replace(/`(.*?)`/g, "<code>$1</code>"));

    var editor = ace.edit(this.$('.code')[0]);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

    var that = this;
    editor.on('change', function(){
      that.model.set('js', editor.getSession().getValue());
    });

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
