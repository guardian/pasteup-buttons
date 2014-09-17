module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.initConfig({
        clean: {
            build: [
                'build'
            ],
            docs: [
                'docs'
            ],
        },
        scsslint: {
            buttons: [
                'src'
            ],
            options: {
                bundleExec: true,
                config: 'scss-lint.yml',
                reporterOutput: null
            }
        },
        sass: {
            buttons: {
                options: {
                    style: 'compressed',
                    bundleExec: true
                },
                files:  [{
                    expand: true,
                    cwd: 'src',
                    src: [
                        '**/*.scss',
                        '!**/_*.scss'
                    ],
                    dest: 'build',
                    ext: '.min.css'
                }]
            }
        },
        hologram: {
            buttons: {
                options: {
                    config: 'hologram-config.yml'
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

    grunt.registerTask('validate', ['scsslint:buttons']);
    grunt.registerTask('build', ['validate', 'clean:build', 'sass:buttons']);
    grunt.registerTask('docs', ['build', 'clean:docs', 'hologram:buttons']);
    grunt.registerTask('release', ['docs', 'gh-pages:docs']);
};