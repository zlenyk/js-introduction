/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      tasks: {
        src: ['tasks/*'],
        dest: 'dist/tasks.js'
      }
    },
    watch: {
      files: 'tasks/*',
      tasks: ['concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat']);
};
