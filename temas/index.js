(function(){
	"use strict";

	console.log('inside js temas');

	function getUrlParameter(name) {
	    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	    var results = regex.exec(location.search);
	    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

	String.prototype.capitalize = function() {
    	return this.charAt(0).toUpperCase() + this.slice(1);
	}

	var parameter = getUrlParameter('ref');
	var parameterNme = getUrlParameter('refnme');

	var themeTitle = document.getElementById('theme_title');
	parameterNme = parameterNme.replace(new RegExp('-', 'g') , ' ');
	// themeTitle.textContent = parameterNme.capitalize();
	themeTitle.textContent = parameterNme.toUpperCase();

	const mysiema = new Siema({
	    selector: '.siema',
	    duration: 200,
	    easing: 'ease-out',
	    perPage: 5,
	    startIndex: 0,
	    draggable: true,
	    multipleDrag: true,
	    threshold: 20,
	    loop: false,
	    rtl: false,
	});

	var btnNext = document.getElementById('right-btn');
	btnNext.addEventListener('click', ()=> mysiema.next());

	var btnPrev = document.getElementById('left-btn');
	btnPrev.addEventListener('click', () => mysiema.prev());

	var btnReturn = document.getElementById('btn_return');
	btnReturn.addEventListener('click', function(){
		window.history.back();
	});
	
})();