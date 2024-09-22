const cartWrapper = document.querySelector('.cart-wrapper');

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

        //провіряємо чи є такий товар у корзині
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            //кщо товар не у корзині
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
							</div>`;

        
        //відобразимо товар у корзині
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML) //дозволяє нам вставити кусок HTML розмітки
        }

        card.querySelector('[data-counter]').innerText = '1'; // скидуємо кількість товаріав до 1 після того як додали у кошик
    

        

        toggleCartStatus();//відображення статусу корзини буд у тій функції


        calcCartPriceAndDelivery();//перерахунок всіх товарів у корзині(ціна всіх товарів)
    }
});







/* const cartWrapper = document.querySelector('.cart-wrapper')

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
}); */