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
            docs: {
                options: {
                    base: 'docs',
                    message: 'Releasing docs to http://guardian.github.io/pasteup-buttons/'
                },
                src: [
                    '*.html',
                    'build/**/*',
                    'theme-build/**/*'
                ]
            }
        }
    });

    grunt.registerTask('build', ['sass:buttons']);
    grunt.registerTask('docs', ['build', 'hologram:buttons']);
    grunt.registerTask('release', ['docs', 'gh-pages:docs']);
};