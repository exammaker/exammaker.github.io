/**
 * App Main Script
 */

$(function() {
	if (!window.indexedDB) {
		alert("Your browser does not support IndexedDB, you are not able to use Exam Maker. To fix this either change your browser settings or install another browser such as Google Chrome or Mozilla Firefox");
	}
});