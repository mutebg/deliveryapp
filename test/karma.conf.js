module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],

		browsers: ['Chrome'],

		autoWatch: true,

		files: [
			'../bower_components/angular/angular.min.js',
			'../bower_components/angular-route/angular-route.min.js',
			'../bower_components/angular-resource/angular-resource.min.js',
			'../bower_components/angular-messages/angular-messages.min.js',
			'../bower_components/angular-animate/angular-animate.min.js',

			'../js/config/config.js',
			'../js/app.js',
			'../js/services/**/*.js',
			'../js/directives/**/*.js',
			'../js/controllers/**/*.js',
			//'../js/filters/**/*.js',
			'../js/lib/angular-notify.js',

			'../bower_components/angular-mocks/angular-mocks.js',


			'./unit/**/*.js'
		]
	});
};