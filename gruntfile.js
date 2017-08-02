module.exports = function (grunt) {
  grunt.initConfig({
    browserSync: {
        dev: {
            bsFiles: {
                src : ['*.css', '**/*.php', '**/*.js', '!node_modules'],
            },
            options: {
                watchTask: true,
                proxy: "https://ghc.dev",
                https: {
                    key: "/Users/andrew/github/dotfiles/local-dev.key",
                    cert: "/Users/andrew/github/dotfiles/local-dev.crt",
                }
            },
        },
    },
    postcss: {
        options: {
            map: {
                inline: false,
            },

            processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
            ]
        },
        dist: {
            src: '*.min.css',
        }
    },
    sass: {
        dev: {
            files: {
                "style.min.css" : "SCSS/style.scss",
            }
        }
    },
    uglify: {
        custom: {
            files: {
                'js/ghc-e3-workshops.min.js': ['js/ghc-e3-workshops.js'],
                'js/media-analytics.min.js': ['js/media-analytics.js'],
            },
        },
    },
    watch: {
        styles: {
            files: "SCSS/*.scss",
            tasks: ['sass', 'postcss'],
        },
        javascript: {
            files: ["js/*.js", "!js/*.min.js"],
            tasks: ['uglify'],
        },
    },
  });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', [
        'browserSync',
        'watch',
    ]);
};
