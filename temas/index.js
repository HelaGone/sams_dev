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
	themeTitle.textContent = parameterNme.capitalize();

	// console.log(theme_title);

	// switch(parameter){
	// 	case '1':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '2':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '3':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '4':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '5':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '6':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '7':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '8':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '9':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '10':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '11':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '12':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// 	case '13':
	// 	console.log('https://localhost/noticieros/wp-json/news/v1/topico/'+parameterNme);
	// 	break;
	// }


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

})();