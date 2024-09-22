function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('.cart-total p');

    let priceTotal = 0;//загальна ціна товару

    priceElements.forEach((item) => {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });

    totalPriceEl.innerText = priceTotal;// відображаємо ціну на сторінці


    if (priceTotal > 0) {//ховає або показує блок з вартістю товару
        cartDeliveryEl.classList.remove('none');
    } else {
        cartDeliveryEl.classList.add('none');
    }


    if (priceTotal >= 600) {//долаєм підсвітку якщо бесплатно і міняєм з бесплатної на 250 руб доставку
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }

}