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
	}//end for list item


	var theme_list = document.getElementById('theme_list');

	app.getTemas = function(){
		var url = "https://localhost/samsung_app_markup/assets/temas.json";
		var request = new XMLHttpRequest();
		console.log('getting temas');
	  	request.onreadystatechange = function(){
			if (request.readyState === XMLHttpRequest.DONE) {
				if (request.status === 200) {
			  		var response = JSON.parse(request.response);
			  		response = response.temas;
			  		var count = 1;
					response.forEach(function(value){
						if(count < 6){
							app.populateThemes(value);
						}
						count++;
					});
				}
			}
	  	};
	  	request.open('GET', url);
		request.send();
	}

	app.getTemas();


	app.populateThemes = function(data){
		var tema = data;
		var tema_ID = tema.id;
		var tema_name = tema.tema_nme;
		var listitem = app.visibleCards[tema_ID];

		if(!listitem){
			// console.log("no listItem, create one");
			listitem = app.itemTemplate.cloneNode(true);
			listitem.classList.remove('cardTemplate');
			listitem.querySelector('.last_updated').textContent = new Date('m Y, d');
			listitem.removeAttribute('hidden');
			app.list_container.appendChild(listitem);
			app.visibleCards[tema_ID] = listitem;

			var itemContent = {
				id:tema_ID,
				temaName: tema_name
			}

			Array.prototype.push.call(myItems, itemContent);
			var temaUI = tema_name.replace(/-/g, ' ');
			var temaUI = temaUI.charAt(0).toUpperCase() + temaUI.substr(1);

			listitem.setAttribute('refId', tema_ID);
			listitem.setAttribute('refNme', tema_name);
			listitem.querySelector('.titles2').textContent = temaUI;
			listitem.querySelector('.titles2').setAttribute('data-theme', tema_name);

		}else{
			console.log("listItem exists!");
		}
	}

	/*CLICK ON SINGLE TEMA*/
	var mainContainer = document.getElementById('main_section');
	var tema_itemContainer = mainContainer.querySelector('.tema_container');
	tema_itemContainer.addEventListener('click', function(event){
		var reference = event.target.getAttribute('refid');
		var reference_nme = event.target.getAttribute('refNme');
		// console.log(reference);
		for(var i=myItems.length-1; i>=0; i--){
			if(myItems[i].id == reference){
				console.log('click on reference: '+reference);
				window.location = 'temas/?ref='+reference+'&refnme='+reference_nme;
			}
		}
	});


	/*
		CAROUSEL SLIDER 
	*/
	var listElem = document.querySelector('.tema_container');
	var btnLeft = document.querySelector('#left-btn');
	var btnRight = document.querySelector('#right-btn');
	var count = 0;

	btnLeft.addEventListener('click', function(event){
		count++;
		listElem.style.left = count*286+'px';
		if(count > -2){
			btnLeft.style.display = 'block';
		}
		if(count >= 0){
			btnLeft.style.display = 'none';
		}
		console.log(count);
	});

	btnRight.addEventListener('click', function(event){
		count--;
		listElem.style.left = count*286+'px';
		if(count < 0){
			btnRight.style.display = 'block';
		}
		if(count <= -2){
			btnRight.style.display = 'none';
		}
		console.log(count);
	});




	/*app.getVideos = function(){
		var url = "https://localhost/noticieros/wp-json/news/v1/video";
	  	var request = new XMLHttpRequest();
	  	request.onreadystatechange = function(){
			if (request.readyState === XMLHttpRequest.DONE) {
				if (request.status === 200) {
			  		var response = JSON.parse(request.response);
			  		var count = 0;
					response.forEach(function(value){
						if(count < 4){
							app.populateList(value);
						}
						count++;
					});
				}
			}
	  	};
	  	request.open('GET', url);
		request.send();
	}

	app.populateList = function(data){
		var the_ID, the_excerpt, the_date, the_link, the_title, the_video_src;
		the_ID = data.ID;
		the_title = data.post_title;
		the_link = data.post_link;
		the_date = data.post_date;
		the_excerpt = data.post_excerpt;
		the_video_src = data.video_854x480;

		var listItem = app.visibleCards[the_ID];

		if(!listItem){
			console.log('no existe listItem, crear una');
			listItem = app.itemTemplate.cloneNode(true);
			listItem.classList.remove('theme_list_item');
			listItem.querySelector('.last_updated').textContent = the_date;
			listItem.querySelector('.titles2').textContent = the_title;
			app.list_container.appendChild(listItem);
			app.visibleCards[the_ID] = listItem;

			var itemContent = {
				id: the_ID,
				title: the_title,
				excerpt: the_excerpt,
				date: the_date,
				link: the_link,
				video: the_video_src
			}

			Array.prototype.push.call(myItems, itemContent);

		}else{
			console.log('ya existe listItem!');
		}

	}*/

	// app.getVideos();

})();