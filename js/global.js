(function(){
	"use strict";
	console.log('global js');

	var btnReturn = document.getElementById('btn_return');
	btnReturn.addEventListener('click', function(){
		window.history.back();
	});
	
})();