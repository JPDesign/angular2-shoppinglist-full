+function(global) {
	var packages = {
		'app': {
			main: 'main.js',
			defaultExtension: 'js'
		},
		'rxjs': {
			defaultExtension: 'js'
		},
	};

	[
		'common',
		'compiler',
		'core',
		'forms',
		'http',
		'platform-browser',
		'platform-browser-dynamic',
		'router'
	].forEach(function (pkgName) {
		packages['@angular/' + pkgName] = {
			main: 'bundles/' + pkgName + '.umd.js',
			defaultExtension: 'js'
		}
	});

	var config = {
		map: {
			'app': 'app',
			'@angular': 'node_modules/@angular',
			'rxjs': 'node_modules/rxjs'
		},
		packages: packages
	};

	System.config(config);

}(this);
