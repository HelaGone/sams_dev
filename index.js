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


	/*
		AJAX FOR CATEGORY
	*/
	var xmlhttp = new XMLHttpRequest();
	var url = './assets/temas.json';

	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var jsonArr = JSON.parse(this.responseText);
			buildThemeList(jsonArr);
		}
	};
	xmlhttp.open('GET', url, true);
	xmlhttp.send();


	function buildThemeList(arr){
		console.log(arr.temas);

		var themeArray = arr.temas;
		var divContainer = document.getElementById('theme_list');
		var innerContainer = divContainer.childNodes[0];

		themeArray.forEach(function(value, key){
			// console.log(value);
			var item = document.createElement('div');
			item.id = value.id;
			item.setAttribute('class','theme_list_item');
			item.setAttribute('data-theme', value.slug);
			item.setAttribute('data-refid', value.id);
			item.style.backgroundImage = 'url("./images/'+value.thumb+'/")';

			var itemCaption = document.createElement('div');
			itemCaption.setAttribute('class', 'caption');
			item.appendChild(itemCaption);

			var itemTitle = document.createElement('h3');
			itemTitle.setAttribute('class', 'titles2');
			itemTitle.innerHTML = value.tema_nme;
			itemCaption.appendChild(itemTitle);

			var itemDate = document.createElement('div');
			itemDate.setAttribute('class', 'last_updated');
			itemDate.innerHTML = value.date;
			itemDate.style.display = 'none';
			itemCaption.appendChild(itemDate);

			//Last step add item to list container
			innerContainer.appendChild(item);
		});		


	}


	for(var i=0; i<list_item.length; i++){
		list_item[i].addEventListener("click", function(){
			var data = this.getAttribute('data-channel');
			// console.log(data);

			switch(data){
				case 'las-estrellas':
					console.log(data);
					window.location = 'player';
					//Change screen and run channel las estrellas
					break;
				case 'foro-tv':
					console.log(data);
					window.location = 'player';
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
	

})();