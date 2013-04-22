/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      tasks: {
        src: ['tasks/*'],
        dest: 'dist/tasks.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};
