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
});
Backbone.history.start();

var TasksView = Backbone.View.extend({
  template: _.template($('#tasksView').html()),
  render: function(){
    $('#menu').html(this.template({
      tasks: tasks.getGrouped()
    }));
  }
});
var tasksView = new TasksView();
tasksView.render();

tasks.tasks.on('change:status', function(){
  tasksView.render();
});
