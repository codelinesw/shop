var module_shoes = (function(){

	var obj = {
		BtnColor: document.querySelectorAll('.btn-color'),
		Image: document.querySelector('.front-image'),
		BtnSize: document.querySelectorAll('.btn-size')
	};

	let __construct = () => {
		console.log('init...');
		init_events();
	};

	var loopElements = (elements,callback) => {
		[].forEach.call(elements,callback);
	};

	var changeColor = (elements) => {
		loopElements(elements, (item,index) => {
			console.log(elements[index]);
			item.addEventListener('click',(e) => {
				e.preventDefault();
				loopElements(elements, (items,index) => {
					elements[index].classList.remove('active');
				});
				let NewClass = 'image-product front-image '+item.getAttribute('color');
				obj.Image.className = 'image-product front-image';
				item.classList.add('active');
				obj.Image.className = NewClass;
			});
		});
	}


	var chooseSize = (elements) => {
		loopElements(elements, (item,index) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				loopElements(elements, (items,index) => {
					elements[index].classList.remove('active');
					elements[index].classList.remove('size-active');
				});
				item.classList.add('active');
				item.classList.add('size-active');
			});
		});
	}
	let init_events = function(){
		changeColor(obj.BtnColor);
		chooseSize(obj.BtnSize);
	}

	return {
		init: __construct
	}
}());

module_shoes.init();