var svg4everybody = require('svg4everybody');

$(function () {
	console.log('test jquery');
});

console.log('test without jquery');

define(['jquery', 'jquery-validation'], function ($) {
	$("#commentForm").validate();
});

svg4everybody({
	fallback: function (src, svg, use) {
		// return 'fallback.png';
		return true;
	}
});
