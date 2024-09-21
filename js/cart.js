const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', (event) => { //event — це об'єкт події, який містить інформацію про те, що сталося під час кліку
    if (event.target.hasAttribute('data-cart')) {
        //шукає карточку з товаром в середині якої був зроблений клік
        const card = event.target.closest('.card');//шукає батька з класом card

        // збираємо данні з товару і записуєм в обєкт:
        const productInfo = {
            id: card.dataset.id,//верне нам те що записано у data-id 
            imgSrc: card.querySelector('.product-img').getAttribute('src'),//getAttribute() повертає значення атрибута який введений у дужках
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
        //зібрані дані підставимо у шаблон
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>}`;

        //відобразимо товар у корзині
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML) //дозволяє нам вставити кусор HTML розмітки
    }
});