const path = require('path');
module.export = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/')
			}
		}
	}
}