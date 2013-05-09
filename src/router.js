"use strict";

var router = new Backbone.Router({
  routes: {
    "task/*taskname": "task",  // #search/kiwis
    "import": "import",
    "export": "export",
    "*path": "default"
  }
});
router.on('route:task', function(page){
  tasks.load(page);
});
router.on('route:import', function(page){
  var $content = $('#content');
  var $textarea = $('<textarea class="import">');
  $content.html($textarea);

  var $import = $('<button>import</button>');
  $import.on('click', function(){
    var data = $textarea.val();
    data.split(/\n+==========\n+/g).forEach(function(data){
      var data = data.split(/\n+---\n+/);
      var name = data[0];
      var js = data[1];

      console.log(data);

      var task = tasks.tasks.findWhere({name: name});
      if(!task){
      //  console.log('task ' + name + ' not found', data);
      }else{
        task.set('js', js);
        task.test();
      }
    });
  });
  $content.append($import);
});
router.on('route:export', function(page){
  var $textarea = $('<textarea class="export">');
  var data = '';
  tasks.tasks.forEach(function(task){
    if(task.get('status') !== 'none'){
      data += task.get('name') + "\n---\n" + task.get('js') + "\n==========\n\n";
    }
  });
  $textarea.text(data);
  $('#content').html('<section><h1>Export passing/failing tasks</h1>' + $textarea.wrap('<div>').parent().html() + '</section>');
});

var MenuTaskView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(){
    var view = this;
    this.model.on('change:current change:status', function(){
      view.$el.attr('class', '');
      view.$el.addClass(this.get('status'));
      if(this.get('current')){
        view.$el.addClass('current');
      }
    });
  },
  template: _.template($('#menuTasksView').html()),
  render: function(){
    this.$el.html(this.template({
      task: this.model
    }));

    return this.el;
  }
});

var TasksView = Backbone.View.extend({
  initialize: function(tasks){
    this.tasks = tasks;
  },
  render: function(){
    var that = this;
    _(tasks.getGrouped()).each(function(group, groupName){
      that.$el.append("<h3>" + groupName + "</h3>");
      var ul = $('<ul>');
      _(group).each(function(task){
        var menuTaskView = new MenuTaskView({model: task});
        ul.append(menuTaskView.render());
      });
      that.$el.append(ul);
    });
    $('#menu').append(this.el);
  }
});
tasks.onLoad(function(){
  var tasksView = new TasksView(tasks.tasks);
  tasksView.render();
  Backbone.history.start();
});
