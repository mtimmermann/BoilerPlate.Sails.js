module.exports = function (grunt) {
	//grunt.registerTask('default', ['compileAssets', 'linkAssets',  'watch']);
  grunt.registerTask('default', ['compileAssets', 'concat', 'linkAssets',  'watch']);
};