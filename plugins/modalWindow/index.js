function ModalWindow(options={}){
	const th = this;	

	this.html = options?.html;
	this.text = options?.text;
	this.title = options?.title;
	this.className = options?.className || 'modal-window';
	this.isOpened = false;

	this.open = open;
	this.close = close;


	const modal_html = render();
	update();


	// funcs 
	function render(){
		var result = null;
		const modal = document.createElement('div');
		const modal_wrap = document.createElement('div');
		const modal_head = document.createElement('div'); 
		const modal_body = document.createElement('div'); 
		const modal_foot = document.createElement('div'); 
		const modal_btn_close = document.createElement('button');
		
		const text = document.createElement('p');
		const title = document.createElement('h4');
		const html = document.createElement('div');



		if(typeof th.text === 'string'){
			text.textContent = th.text;
			modal_body.append(text);
		}
		if(typeof th.title === 'string'){
			title.textContent = th.title;
			modal_head.append(title);
		}
		if(h_type(th.html).short === 'HTML_el'){
			html.append(th.html);
			modal_foot.append(html);
		}


		// добавляем классы 
		modal.classList.add(`${th.className}`);
		modal_wrap.classList.add(`${th.className}__wrap`);
		modal_head.classList.add(`${th.className}__head`);
		modal_body.classList.add(`${th.className}__body`);
		modal_foot.classList.add(`${th.className}__foot`);
		modal_btn_close.classList.add(`${th.className}__close`);
		text.classList.add(`${th.className}__text`);
		title.classList.add(`${th.className}__title`);
		html.classList.add(`${th.className}__html`);

		modal.onclick = th.close;
		modal_btn_close.onclick = th.close;
		modal_wrap.onclick = (e)=>{ e.stopPropagation()};

		// добавляем элементы внутрь modal_wrap
		modal_head.append(modal_btn_close);
		modal_wrap.append(modal_head, modal_body, modal_foot);
		modal.append(modal_wrap);

		result = modal;
		return result;
	}
	function open(){
		th.isOpened = true;
		document.body.prepend(modal_html);
		setTimeout(() => { update();  }, 200)		
	}
	function close(){
		th.isOpened = false;
		update();
		setTimeout(() => {
			if(!th.isOpened)	modal_html.remove();
		}, 2000)
	}
	function update(){
		modal_html.setAttribute('opened', th.isOpened);
	}


	
}





function h_type(event){
	var first_result = Object.prototype.toString.call(event);
	var result = first_result.slice(1, (first_result.length - 1));
	var result_arr = result.split(' ');
	var result_obj = {result, type: result_arr[1],};

	var html = [result_arr[1].slice(0, 4), result_arr[1].slice(result_arr[1].length - 7, result_arr[1].length)];


	if(html && JSON.stringify(html) == '["HTML","Element"]') result_obj.short = 'HTML_el';

	return result_obj;
};