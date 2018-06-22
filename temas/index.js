(function(){
	"use strict";

	console.log('inside js temas');

	function getUrlParameter(name) {
	    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	    var results = regex.exec(location.search);
	    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

	var parameter = getUrlParameter('ref');
	var parameterNme = getUrlParameter('refnme');
		switch(parameter){
			case '1':
			console.log(parameterNme);
			break;
			case '2':
			console.log(parameterNme);
			break;
			case '3':
			console.log(parameterNme);
			break;
			case '4':
			console.log(parameterNme);
			break;
			case '5':
			console.log(parameterNme);
			break;
		}
})();