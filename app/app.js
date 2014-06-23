'use strict';

require('angular');

module.exports = angular.module('taliflo',
	[
		require('./common/common.js').name,
		require('./modules/home').name
	])
	.config(require('./appRoutes'))
	.constant('version', require('../package.json').version)
	.run(require('./common/common-init.js'));