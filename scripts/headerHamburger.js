function headerHamburger(){
	const header = document.querySelector('.header');
	const hamburger = header.querySelector('.header-hamburger');
	const nav = header.querySelector('.navigation');
	const links = nav.querySelectorAll('a');


	hamburger.onclick = (e) => {
		e.stopPropagation();
		toggle();
	}

	nav.onclick = (e) => e.stopPropagation();


	function toggle(){
		let active = !JSON.parse(hamburger.dataset.active);
		hamburger.dataset.active = active;		
		header.dataset.hamburger = active;
	}

	function close(){
		hamburger.dataset.active = false;		
		header.dataset.hamburger = false;
	}



	links.forEach(link => link.addEventListener('click', close) )


	document.addEventListener('click', close)


}


headerHamburger();