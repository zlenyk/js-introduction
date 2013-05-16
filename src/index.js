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

var db = Pouch('tasks');

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
  },
  fetch: function(callback){
    var name = this.getEscapedName();
    var that = this;
    db.get(name, function(err, res){
      if(!err){
        that.set('status', res.status);
        that.set('js', res.js);
      }
      callback()
    });
  },
  getEscapedName: function(){
    return btoa(this.get('name'));
  },
  save: function(){
    var name = this.getEscapedName();
    var doc = {_id: name, js: this.get('js'), status: this.get('status')};
    console.log(doc);
    db.get(name, function(err, res){
      if(!err){
        doc._rev = res._rev;
      }
      db.post(doc, function(err, res){
        //console.log('saved task', err, res);
      });
    });
  },
  test: function(callback){
    // this is some test resetting magic. Normally you don't do that
    // with QUnit so it doesn't work too well
    QUnit.reset();
    QUnit.init();
    QUnit.start();

    var code = this.get('js');

    // the most basic js linting
    var result = JSHINT(code, {
      debug:true,
      eqnull:true,
      boss:true,
      loopfunc:true,
      undef:true,
      browser:true,
      jquery:true,
      devel:true
    }, {window: false});
    if(!result){
      var t = _.template($('#jshintError').html());
      var errors = JSHINT.errors.map(function(err){
        return {
          row: err.line,
          col: err.character,
          reason: err.reason,
          evidence: err.evidence
        };
      });
      $('.jshint .errors').html(t({errors: errors}));
      $('.jshint').show(1000);

      // make qunit fail
      test('jshint', function(){
        ok(result, 'jshint should pass');
      });
    }else{
      $('.jshint').hide(400);

      var tests = this.get('tests');

      // really nasty stuff just to save you from
      // overriding test function or destorying teh world
      eval(
        '(function(){\n' +
        code + '\n' +
        '(' + tests.toString() + ')()\n' +
        '})()'
      );

      var that = this;
      QUnit.tests.one('done', function(e, res){
        that.set('status', !res.failed ? 'pass' : 'fail');
        if(typeof callback === 'function'){
          callback();
        }
      });
    }
  }
});
var TaskView = Backbone.View.extend({
  className: 'task',
  template: _.template($('#taskView').html()),
  events: {
    'click .go': function(){
      var model = this.model;
      this.model.test(function(){
        model.save();
      });
    },
    'click .prev': function(){
      var prev = tasks.getPrev(this.model.get('name'));
      if(prev){
        router.navigate('task/' + prev.get('name'), {trigger: true});
      }else{
        // oh c'mon, alert?!
        alert('no prev');
      }
    },
    'click .next': function(){
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
    $ins.html($ins.html().replace(/\n/g, '<br>')); // <br> omg!

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
      this.tasks.each(function(task){
        task.set('current', false);
      });

      task.set('current', true);
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
  },
  onLoad: function(callback){
    var count = this.tasks.length;
    this.tasks.forEach(function(task){
      task.fetch(function(){
        if(!--count){
          callback();
        }
      });
    });
  }
};
