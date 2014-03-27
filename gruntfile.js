module.exports = function(grunt) {
    'use strict';

    /* config grunt */
    grunt.initConfig({
        project: {
            "docs": "./",
            "css": "./css/",
            "less": "./css/less/",
            "img": "./img/",
            "assets": "./assets/",
            "js": "./js/",
            "exclude": {
                "js1": "libs",
                "js2": "prettify"
            }
        },
        watch: {
            scripts: {
                files: ['<%=jshint.project.src%>'],
                tasks: ['jslint:project']
            },
            styles: {
                files: ['<%=csslint.project.src%>'],
                tasks: ['csslint:project']
            },
            less: {
                files: ['<%=project.less%>/*.less'],
                tasks: ['less:dev']
            }
        },
        jshint: {
            dependency: ['gruntfile.js'],
            project: {
                src: [
                    '<%=project.js%>/*.js',
                    '!<%=project.js%>/<%=project.exclude.js1%>/*.js',
                    '!<%=project.js%>/<%=project.exclude.js2%>/*.js'
                ]
            },
            options: {
                 jshintrc: '.jshintrc'
            }
        },
        jsonlint: {
            dependency: {
                src: ['package.json']
            },
            rcfiles: {
                src: [
                    '.csslintrc',
                    '.jshintrc'
                ]
            }
        },
        csslint: {
            project: {
                src: [
                    '<%=project.css%>/main.css'
                ]
            },
            options: {
                 csslintrc: '.csslintrc'
            }
        },
        htmlhint: {
            project: {
                src: [
                    '<%=project.docs%>/*.html'
                ]
            },
            options: {
                htmlhintrc: '.htmlhintrc'
            }
        },
        less: {
            dev: {
                options: {
                    paths: ['<%=project.less%>'],
                },
                files: {
                    '<%=project.css%>/main.css': '<%=project.less%>/main.less'
                }
            },
            live: {
                options: {
                    paths: ['<%=project.less%>'],
                    compress: true,
                    cleancss: true,
                    ieCompat: true
                },
                files: {
                    '<%=project.css%>/main.css': '<%=project.less%>/main.less'
                }
            }
        },
        img: {
            project: {
                src: [
                    '<%=project.img%>/*.jpg',
                    '<%=project.img%>/*.png',
                    '<%=project.assets%>/*.jpg',
                    '<%=project.assets%>/*.png'
                ]
            }
        },
        shell: {
            checkAlert: {
                command: 'grep -R "alert(" <%=project.js%> --exclude-dir="{<%=project.exclude.js1%>", <%=project.exclude.js2%>, <%=project.exclude.js3%>}"'
            },
            checkConsole: {
                command: 'grep -R "console.log(" <%=project.js%> --exclude-dir="{<%=project.exclude.js1%>", <%=project.exclude.js2%>, <%=project.exclude.js3%>}"'
            },
            checkMergeApps: {
                command: 'grep -R "<<<<<<< .working" <%=project.apps%>'
            },
            checkMergeDocs: {
                command: 'grep -R "<<<<<<< .working" <%=project.docs%>'
            },
            options: {
                stdout: true
            }
        }
    });

    /* load tasks */
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-img');
    grunt.loadNpmTasks('grunt-contrib-less');

    /* register tasks */
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('lint', ['jshint', 'csslint', 'htmlhint']);
    grunt.registerTask('check', ['shell:checkAlert', 'shell:checkConsole', 'shell:checkMergeApps', 'shell:checkMergeDocs']);
    grunt.registerTask('optimize', ['img', 'less:live']);
};