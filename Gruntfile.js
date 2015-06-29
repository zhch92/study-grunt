module.exports = function(grunt) {

    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // uglify插件的配置信息
        uglify: {
            build: {
                src: 'src/a.js',
                dest: 'build/a.min.js'
            }
        },
        less: {
            lessall: {
                files: [{
                    expand:true,
                    cwd:'src',
                    src:'**/*.less',
                    dest: 'output/',
                    ext: '.css'
                }]
            }
        }
    });

    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['uglify','less']);

};
