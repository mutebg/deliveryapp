module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/main.css': 'sass/main.scss',
        }
      }
    },

    watch: {
      styles: {
        files: ['sass/*', 'sass/lib/*'],
        tasks: ['sass']
      }
    },

    protractor: {
      your_target: {
        options: {
          configFile: "test/protractor.conf.js"
        }
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('gless',       ['sass']);
  grunt.registerTask('auto',        ['watch']);
  grunt.registerTask('default',     ['watch']);
  grunt.registerTask('test:e2e',    ['protractor']);
  grunt.registerTask('test:unit',   ['karma:unit']);
  grunt.registerTask('test',        ['karma', 'protractor']);

};