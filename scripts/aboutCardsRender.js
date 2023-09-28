 function aboutCardRender(){
	const list = document.querySelector('.about-cards');

// aboutCars - globalVars.js
	const dataList = aboutCards;


	dataList.forEach(el => {
		let li = `
		<li class="about-cards__item">
			<img src="${el.imgSrc}"/>
			<h4 class="title">${el.title}</h4>
			<p class="text">${el.text}</p>
		</li>
		`;
		
		list.insertAdjacentHTML('beforeend', li);
	})
 }



 aboutCardRender();


