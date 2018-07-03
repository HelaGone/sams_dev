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

	var parameter = getUrlParameter('refID');
	var parameterNme = getUrlParameter('refnme');

	var themeTitle = document.getElementById('theme_title');
	parameterNme = parameterNme.replace(new RegExp('-', 'g') , ' ');
	// themeTitle.textContent = parameterNme.capitalize();
	themeTitle.textContent = parameterNme.toUpperCase();

	/*AJAX FOR VIDEOS BY THEME*/
	/*
		AJAX FOR TEMA
	*/
	var xmlhttp = new XMLHttpRequest();
	// var url = 'https://forotv.mx/wp-json/forotv/v1/topicos/';
	var url = 'https://localhost/forotvmx/wp-json/forotv/v1/topic/'+parameter;
	var jsonArr = '';

	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			jsonArr = JSON.parse(this.responseText);
			console.log(jsonArr);
			// buildThemeList(jsonArr);
			// document.onload = loadSiema();
		}
	};
	xmlhttp.open('GET', url, true);
	xmlhttp.send();

	function loadSiema(){
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
	}

	
})();