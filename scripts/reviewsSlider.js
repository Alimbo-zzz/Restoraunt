function reviewsSlider(){

	// reviews -- globalVars.js
	const data = reviews;


	const slider = renderSlider(data);
	const parentBlock = document.querySelector('.reviews');
	parentBlock.append(slider);

	new Swiper(slider, {
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}"></span>`;
			},
		},

		breakpoints:{
			300:{	
				slidesPerView: 1,
				pagination: {enabled: false}
			},
			768:{
				slidesPerView: 2,
				pagination: {enabled: true}
			}
		}
	})




	// funcs
	function renderSlider(dataList){
		var result = null;
		var swiper = document.createElement('div');
		var wrap = document.createElement('div');
		var btnNext = document.createElement('button');
		var btnPrev = document.createElement('button');
		var pagination = document.createElement('div');

		var iconArrowL = document.createElement('img');
		var iconArrowR = document.createElement('img');
		iconArrowL.src = `./assets/icons/arrow_l.svg`;
		iconArrowR.src = `./assets/icons/arrow_r.svg`;

		btnNext.append(iconArrowR);
		btnPrev.append(iconArrowL);
		
		swiper.classList.add('swiper');
		wrap.classList.add('swiper-wrapper');
		btnNext.classList.add('swiper-button-next');
		btnPrev.classList.add('swiper-button-prev');
		pagination.classList.add('swiper-pagination');
		pagination.classList.add('_styles');


		dataList.forEach((el, i) => {
			var slide = document.createElement('div');
			slide.classList.add('swiper-slide');
			slide.append(renderItem(el));
			wrap.append(slide);
		})

		swiper.append(wrap, pagination, btnNext, btnPrev)
		
		result = swiper;
		return result;
	}

	function renderItem(itemData){
		var result = null;
		var wrap = document.createElement('div');
		wrap.classList.add('reviews-item');

		var dataObj = {
			img: itemData?.img,
			name: itemData?.name,
			description: itemData?.description,
			status: itemData?.status
		}


		wrap.insertAdjacentHTML('beforeend', `
			<p class="reviews-item__description">${dataObj.description}</p>
			<img src="./assets/images/reviews/${dataObj.img}" class="reviews-item__avatar">
			<div class="reviews-item__status">${dataObj.status}</div>
			<div class="reviews-item__name">${dataObj.name}</div>
		`)

		result = wrap;
		return result;
	}


}


reviewsSlider();