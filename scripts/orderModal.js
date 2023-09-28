function orderModal(){
	const btns = document.querySelectorAll('[data-btn="order"]');

	btns.forEach((btn, i) => {
		const modal = new ModalWindow({html: render(), title: 'Форма заказа столика'});
		btn.onclick = modal.open;
	})



	function render(){
		let result = null;
		const form = document.createElement('form');


		form.style.cssText = `
			display: flex;
			flex-direction: column;
			gap: 15px;
		`;

		form.insertAdjacentHTML('beforeend', `
			<label>Выберите Дату и Время: <input required name="date" type='date'/> </label>
			<label>Колличество человек: <input required name="number" type='number'/> </label>
			<button class="btn" type="submit">Заказать стол</button>
		`)


		form.onsubmit = (e) => {
			e.preventDefault();
			const {number, date} = e.target.elements;
			let text = `Дата: ${date.value}, Колличество человек: ${number.value}`;
			let title = `Стол забронирован`;	
			const modal = new ModalWindow({text, title});

			closeModal();
			modal.open();			
		}
		

		function closeModal(){
			form.parentNode.parentNode.parentNode.parentNode.click();
		}



		result = form;
		return result;
	}


}

orderModal();