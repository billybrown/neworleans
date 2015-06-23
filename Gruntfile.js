'use strict';

module.exports = function (grunt) {


  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  // @author bill, echo & co.
  require('jit-grunt')(grunt);  

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // this task allows you to publish to github pages
    'gh-pages': {
      options: {
        base: ''
      },
      src: ['**']
    }

  });


  // documentation on how to run different tasks is in the readme
  grunt.registerTask('deploy', ['gh-pages']);


};
