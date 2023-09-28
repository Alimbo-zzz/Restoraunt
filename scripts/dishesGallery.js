function dishesGallery(){
	const gallery = document.querySelector('.dishes-gallery');
	const list = gallery.querySelector('.dishes-gallery__list');
	const preview = gallery.querySelector('.dishes-gallery__preview')

	var activeItem = 0;

	const dataList = [
		{
			imgSrc: './assets/images/dishes/1.png',
			name: 'Гамбургер 1',
			price: 200,
		},
		{
			imgSrc: './assets/images/dishes/2.png',
			name: 'Гамбургер 2',
			price: 203,
		},
		{
			imgSrc: './assets/images/dishes/3.png',
			name: 'Гамбургер 3',
			price: 22,
		},
	];


	render();
	checkActiveItem();
	clickItem();


	// funcs

	function checkActiveItem(){
		let items = Array.from(list.children);  // находим элементы и превращаем их в массив
		let preview_img = preview.querySelector('img');


		items.forEach((el, i) => {
			if(activeItem === i) el.setAttribute('data-active', true);
			else el.setAttribute('data-active', false);		
		})

		preview_img.src = dataList[activeItem].imgSrc;
	}

	function render(){
		dataList.forEach(el => {
			let li = `
			<li class="dishes-gallery__item" data-active="false">
				<img src="${el.imgSrc}">
				<p data-name="name" class="dishes-gallery__text">${el.name}</p>
				<p data-name="price" class="dishes-gallery__text">${el.price}₽</p>
			</li>
			`;
			
			list.insertAdjacentHTML('beforeend', li);
		})
	}

	function clickItem(){
		let items = Array.from(list.children);  // находим элементы и превращаем их в массив

		items.forEach((el, i) => {
			el.onclick = () => {
				activeItem = i;
				checkActiveItem()
			};
			
		})
	}
	
}


dishesGallery();


