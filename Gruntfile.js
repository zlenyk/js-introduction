/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      tasks: {
        src: ['tasks/*.js', 'tasks/homework/*.js'],
        dest: 'dist/tasks.js',
        options: {
          process: function(src){
            var keywords = [
              'deepEqual',
              'equal',
              'notDeepEqual',
              'notEqual',
              'notStrictEqual',
              'ok',
              'strictEqual',
              'test'
            ];

            keywords.forEach(function(k){
              src = src.replace(new RegExp('(' + k + '\s*\\()', 'g'), 'QUnit.$1');
            });
            return src;
          }
        }
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
