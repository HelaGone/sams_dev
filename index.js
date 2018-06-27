(function(){
	"use strict";

	console.log('index js');

	var app = {
		isLoading: true,
		visibleCards: {},
		itemTemplate: document.querySelector('.theme_list_item'),
		list_container: document.querySelector('#theme_list')
	}
	var myItems = new Object();

	var mainList = document.getElementById('list_main_channels');
	var list_item = mainList.querySelectorAll(".main_channel_item");

	for(var i=0; i<list_item.length; i++){
		list_item[i].addEventListener("click", function(){
			var data = this.getAttribute('data-channel');
			// console.log(data);

			switch(data){
				case 'las-estrellas':
					console.log(data);
					//Change screen and run channel las estrellas
					break;
				case 'foro-tv':
					console.log(data);
					//Change screen and run channel foro tv
					break;
			}

		});
	}//end for list items

	/*CLICK ON SINGLE TEMA*/
	var mainContainer = document.getElementById('main_section');
	var tema_itemContainer = mainContainer.querySelector('.tema_container');
	tema_itemContainer.addEventListener('click', function(event){
		var reference = event.target.getAttribute('data-refid');
		var reference_nme = event.target.getAttribute('data-theme');
		window.location = 'temas/?ref='+reference+'&refnme='+reference_nme;
	});


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