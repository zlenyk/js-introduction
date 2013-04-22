"use strict";

var router = new Backbone.Router({
  routes: {
    "task/*taskname": "task",  // #search/kiwis
    "*path": "default"
  }
});
router.on('route:task', function(page){
  tasks.load(page);
});
router.on('route:default', function(){
  var TasksView = Backbone.View.extend({
    template: _.template($('#tasksView').html()),
    render: function(){
      $('#content').html(this.template({
        tasks: tasks.tasks
      }));
    }
  });
  var tasksView = new TasksView();
  tasksView.render();
});
Backbone.history.start();
