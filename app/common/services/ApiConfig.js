'use strict';

var apiConfig = function($cookieStore) {
	
/* =======================================================================
	Taliflo API Configuration
======================================================================= */
	var apiProxy = '/api',
		apiVersion = '/v1',
		userID = $cookieStore.get('uid');

	this.API = {
		paths: {
			baseUrl: apiProxy + apiVersion,
			login: apiProxy + '/user/login',
			signup: apiProxy + '/user/signup',
			logout: apiProxy + '/user/logout',
			// updatePassword: apiProxy + '/user/password',
			updatePassword: apiProxy + '/user/' + userID + '/change_password',
			currentUser: apiProxy + apiVersion + '/users/' + userID,
			uploadImage: apiProxy + apiVersion + '/users/' + userID + '/upload_image',
			deleteImage: apiProxy + apiVersion + '/users/' + userID + '/delete_image'
		}
	};

	return this;
};

apiConfig.$inject = ['$cookieStore'];
module.exports = apiConfig;