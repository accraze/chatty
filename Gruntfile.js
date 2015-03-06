module.exports = function(grunt) {
     grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       nodeunit: {
         all: ['tests/*.js']
       },
       preprocess: {
        dist: {
            files: {
             'views/chat.ejs' : 'views/chat.pre',
             'views/layout.ejs' : 'views/layout.pre',
             'js_src/src/chat.js' : 'js_src/src/chat.pre.js'
            }
        }
       },
       clean:{
         dist:{
           src: ['static/js/*.js']
         }
       },
       jshint: {
         dist:{
           src: ['js_src/src/*.js', '!js_src/src/md5.js']
         }
        }
     });

     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-preprocess');
     grunt.loadNpmTasks('grunt-contrib-clean');
     grunt.loadNpmTasks('grunt-contrib-nodeunit');
     // Default task(s).
     grunt.registerTask('default', ['nodeunit', 'preprocess', 'clean', 'jshint']);
     grunt.registerTask('prep', ['nodeunit', 'preprocess', 'clean']);};