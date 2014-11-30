'use strict';

module.exports = function (grunt) {


  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  // @author bill, echo & co.
  require('jit-grunt')(grunt);  

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // this task makes sure you are running the right version of node
    node_version: {
      options: {
        alwaysInstall: false,
        errorLevel: 'fatal',
        globals: [],
        maxBuffer: 200*1024,
        nvm: true,
        override: ''
      }
    },

    // this task allows you to publish to github pages
    'gh-pages': {
      options: {
        base: ''
      },
      src: ['**']
    }

  });


  // documentation on how to run different tasks is in the readme
  grunt.registerTask('default', ['node_version']);
  grunt.registerTask('deploy', ['node_version', 'gh-pages']);


};
