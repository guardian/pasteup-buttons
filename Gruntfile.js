module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        hologram: {
            buttons: {
                options: {
                    config: 'hologram-config.yml'
                }
            }
        },
        sass: {
            buttons: {
                options: {
                    style: 'expanded',
                    bundleExec: true
                },
                files: {
                    'build/buttons.css': 'src/buttons.scss'
                }
            }
        },
        'gh-pages': {
            demo: {
                options: {
                    base: 'demo',
                    message: 'Auto-updating demo'
                },
                src: ['*.{html,css}']
            }
        }
    });

    grunt.registerTask('docs', ['sass:buttons', 'hologram:buttons']);
};