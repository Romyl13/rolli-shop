function calcCartPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');

    let priceTotal = 0;//загальна ціна товару

    priceElements.forEach((item) => {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });

    totalPriceEl.innerText = priceTotal;// відображаємо ціну на сторінці
}