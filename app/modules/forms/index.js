'use strict';

module.exports = angular.module('forms',
	[
		require('./donate').name,
		require('./pledge').name,
		require('./redeem').name
	])
	.config(require('./formsConfig'))
	.controller('FormsCtrl', require('./FormsController'));